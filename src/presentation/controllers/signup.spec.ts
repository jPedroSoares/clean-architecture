import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      name: 'any_name',
      email: 'any_email@gmail.com',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
