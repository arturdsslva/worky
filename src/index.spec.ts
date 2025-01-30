import Person from '@/index'

it('Sould sum', () => {
  const a = 1
  const b = 2
  const sum = a + b

  const person = new Person()

  expect(sum).toBe(3)
  expect(person.sayMyName()).toBe('Artur')
})
