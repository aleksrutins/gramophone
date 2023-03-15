const info = {
    'aleksrutins': {
        github: 'aleksrutins',
        email: 'aleks@rutins.com',
        link: 'https://aleks.rutins.com'
    }
} as Record<string, Author>

export type Author = {
    github: string,
    email: string,
    link: string
}

export default (name: string) => info[name]