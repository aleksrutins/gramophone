import md5 from "md5";

export function getGravatarURL(email: string) {
    const address = email.trim().toLowerCase()
    const hash = md5(address)
    return `https://www.gravatar.com/avatar/${hash}`
}