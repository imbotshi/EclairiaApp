import { Id } from ".."

/**
 * Représente l'entité d'un utilisateur connecté
 */
export type UserSession = {
    activated: boolean,
    city: {
      [key: string]: any
    },
    default_language: {
      [key: string]: any
    },
    email: string,
    email_confirmed: boolean,
    email_source: string,
    id: Id,
    interests: any[],
    languages: any[],
    screen_name: string,
    shows: any[],
    username: string
}