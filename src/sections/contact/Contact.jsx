import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as style from "./contactStyle";

const MotionStack = motion(Stack);

const Contact = ({ contactRef }) => {
  const contactInView = useInView(contactRef, {
    once: "true",
    margin: "-300px",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur", // validate when user leaves the field
  });

  //  I'm choosing what to do with onSubmit(data). Encode and onSubmit are for Netlify form
  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const onSubmit = async (data) => {
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      reset();
      // show success UI if you want
    } catch (e) {
      console.error(e);
      // show error UI if you want
    }
  };

  return (
    <Box>
      <Container fixed sx={{ paddingY: "120px" }}>
        <MotionStack
          initial={{ opacity: 0, y: 30 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          gap="70px"
          alignItems="center"
        >
          <Box
            component="img"
            src="images/profile_veljko.jpeg"
            sx={style.contactContainer}
          />
          <Box>
            <Typography variant="h3" color="text.blue">
              Contact me
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I’m always excited to take on new projects and work with creative
              teams. Whether you have a project in mind or just want to connect,
              feel free to reach out!
            </Typography>
            <Box
              component="form"
              sx={style.form}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              {/* Name */}
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Name"
                    color="text"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Email"
                    color="text"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              {/* Subject */}
              <Controller
                name="subject"
                control={control}
                rules={{
                  required: "Subject is required",
                  maxLength: { value: 120, message: "Subject is too long" },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Write a Subject"
                    color="text"
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                  />
                )}
              />

              {/* Message */}
              <Controller
                name="message"
                control={control}
                rules={{
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Message"
                    color="text"
                    multiline
                    minRows={4}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                  />
                )}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)" }}
              >
                {isSubmitting ? "sending..." : "Send Message"}
              </Button>
            </Box>
          </Box>
        </MotionStack>
      </Container>
    </Box>
  );
};

export default Contact;
