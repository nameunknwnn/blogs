import { parseISO, format } from "date-fns";


interface DateProps {
    dateString: string;
  }
  

export default function Date({dateString}:DateProps){
    const date =parseISO(dateString)
    return(
        <>
        <time>{format(date,'LLL d,yyyy')}</time>
        </>
    )
}