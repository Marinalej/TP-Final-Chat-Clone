const contacts= [
    {
        id: 1,
        name: "Hyunjin",
        avatar:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/20240503_Hyunjin_of_Stray_Kids.png/250px-20240503_Hyunjin_of_Stray_Kids.png',
        status: "online",
        lastSeen: "00:00",
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola estoy hablando con Pepe Ochoa',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'más chusma ese...',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'y bué...',
                status: 'visto'
            }

        ]
    },
    {
        id: 2,
        name: "Chan",
        avatar:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgpGfErYAGlBgm5kpz_TEPbzEYQY5bJKv620ww1UEr0hAcUOkUKm6py6bmzRsDUQVLEGoVjADtqtGH_JT_EQkr2Q',
        status: "online",
        lastSeen: "23:12",
        lastMessage:'los vimos en Rio, inolvidable!',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Cómo salió todo?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'perfecto!',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'los vimos en Rio, inolvidable!',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: "Jisoo",
        avatar:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJeZIThDjAfoSa4tzLwHDrx-xzp1Ye6Dd8AFhLoJqUzfRZS7da',
        status: "offline",
        lastSeen: "23:45",
        lastMessage:'mejor entonces',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola Sooya!',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'hola amiga, todo bien??',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'Todo esta bien?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'mejor entonces',
            }
        ]
    },
    {
        id: 4,
        name: 'The salesman',
        avatar: 'https://sm.mashable.com/t/mashable_me/photo/default/gong-yoo-in-squid-game_hqec.1248.jpg',
        status: "offline",
        lastSeen: "23:15",
        lastMessage:'nos encontamos en Juramento y te explico',
        messages: [
            {
                emisor: 'YO',
                hora: '23:10',
                id: 1,
                texto: 'Hola, estoy buscando un trabajo',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'hola, me gustaria jugar con vos',
            },
            {
                emisor: 'YO',
                hora: '23:12',
                id: 3,
                texto: 'jugar?',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:13',
                id: 4,
                texto: 'nos encontamos en Juramento y te explico',
                status: 'visto'
            }
        ]
    },
    {
        id: 5,
        name: 'Pepe',
        avatar:'https://www.mirostream.com/adjuntos/1000/miros/2025/07/para-las-notas-8-1.jpg',
        status: "offline",
        lastSeen: "23:30",
        lastMessage:'JAMÁS! ni volvere a hacerlo',
        messages: [
            {
                emisor: 'YO',
                hora: '15:10',
                id: 1,
                texto: 'Hola Pepe, te tengo data',
                status: 'visto'
            },
            {
                emisor: 'OTRO',
                hora: '23:11',
                id: 2,
                texto: 'Y después me tratás de chusma',
            },
            {
                emisor: 'YO',
                hora: '24:00',
                id: 3,
                texto: 'JAMÁS! ni volvere a hacerlo',
                status: 'visto'
            },
        ]
    }

];


export const getContactList = () => {
    return contacts
}

export const getContactById = (contac_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contac_id)) {
            return contact
        }
    }
    return null
}
export const getLastMessage = (contact) => {
  if (contact.messages.length > 0) {
    return contact.messages[contact.messages.length - 1].texto
  } else {
    return "No hay mensajes"
  }
}
export const getLastSeen = (contact) => {
  return contact.lastSeen
}
