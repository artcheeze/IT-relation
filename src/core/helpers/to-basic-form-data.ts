export function toBasicFormData(data: { [key: string]: any }) {
  const formData = new FormData()
  formData.append('data', JSON.stringify(data))
  return formData
}
