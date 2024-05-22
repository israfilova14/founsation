import * as yup from "yup"

 export const activityFormSchema = yup.object().shape({
    image: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required()
 })