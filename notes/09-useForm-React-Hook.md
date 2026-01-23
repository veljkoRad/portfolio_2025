1. `npm i react-hook-form`

2. `import { useForm, Controller } from 'react-hook-form';`
    * Controller is a bridge between RHF and MUI , since TextField is not plain input, it needs controller.

3.  `const {control, handleSubmit,reset,formState:{errors, isSubmitting}}=useForm({defaultValues:{name:'',email:''...}})`

    * `handleSubmit` is a wrapper that validates fields based by `rules` , if valid, calls your onSubmit(data)

    * `control` concect UI component to the form

4. 

```
  const onSubmit = async (data) => {
    console.log('Form data', data)

    await new Promise((r) => setTimeout(r, 8000))

    reset() // clears form after successful submit
  }
```
5. 
```
      <Controller
                name='name'
                control={control}
                rules={{
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
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
```

  * `error={!!errors.email}` turns the field red. !! turns any value to boolean

  * `helperText={errors.email?.message}` shows a human message

  6. Email

```
                <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email',
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
```

  * `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` -regular expression (regex)