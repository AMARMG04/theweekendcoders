"use server"

export const SendMail = async (formdata: FormData) => {
    const name = formdata.get('name') as string;
    const email = formdata.get('email') as string;
    const phone = formdata.get('phone') as string;
    const profession = formdata.get('profession') as string;    
    const requirement = formdata.get('requirement') as string;
    const description = formdata.get('description') as string;
    
    const res = await fetch("https://theweekendcoders.vercel.app/api/send", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            profession,
            requirement,
            description
        })
    })
    return res.json()
}
