export type Lang = "es" | "en";

type Dict = {
  nav: { home: string; detalles: string; regalos: string; confirma: string };
  intro: { title: string; warning: string };
  home: {
    heroScript: string;
    location: string;
    date: string;
    countdownAria: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  detalles: {
    titleDate: string;
    ceremony: string;
    ceremonyTime: string;
    ceremonyPlace: string;
    ceremonyAddress: string;
    dressCodeFormal: string;
    celebration: string;
    celebrationTime: string;
    celebrationPlace: string;
    celebrationAddress: string;
    celebrationDressCode: string;
    celebrationDesc: string;
    map: string;
    addToCalendar: string;
    churchMapTitle: string;
    lodgeMapTitle: string;
    ceremonyPhotoAlt: string;
    celebrationPhotoAlt: string;
    celebrationCarouselAria: string;
    prevPhoto: string;
    nextPhoto: string;
    dotsAria: string;
    goToPhoto: string;
  };
  regalos: {
    kicker: string;
    title: string;
    copy: string;
    previewTitle: string;
    previewCta: string;
    previewHover: string;
    ariaLabel: string;
  };
  confirma: {
    title: string;
    copy: string;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    attending: string;
    selectOption: string;
    yes: string;
    no: string;
    message: string;
    optional: string;
    submit: string;
    success: string;
    missingEndpoint: string;
    missingFields: string;
    sending: string;
    helpTitle: string;
    helpCopy: string;
    iframeTitle: string;
  };
  footer: { line1: string; line2: string };
  titles: {
    home: string;
    detalles: string;
    regalos: string;
    confirma: string;
    intro: string;
  };
  toggle: { aria: string };
};

export const translations: Record<Lang, Dict> = {
  es: {
    nav: {
      home: "Home",
      detalles: "Detalles",
      regalos: "Regalos",
      confirma: "Confirmación",
    },
    intro: {
      title: "Te invitamos a nuestro matrimonio",
      warning: "Esta invitación es personal",
    },
    home: {
      heroScript: "¡nos casamos!",
      location: "San Pedro de la Paz",
      date: "11 de Febrero de 2027",
      countdownAria: "Cuenta regresiva para la boda",
      days: "días",
      hours: "horas",
      minutes: "minutos",
      seconds: "segundos",
    },
    detalles: {
      titleDate: "Jueves, 11 de Febrero, 2027",
      ceremony: "Ceremonia",
      ceremonyTime: "4:30 pm - 6:00 pm",
      ceremonyPlace: "Iglesia Evangélica Bautista de San Pedro",
      ceremonyAddress: "San Pedro de la Paz, Bío Bío, Chile",
      dressCodeFormal: "Código de vestimenta Formal/Etiqueta opcional",
      celebration: "Celebración",
      celebrationTime:
        "Jue, 11 Feb 2027, 6:00 pm - Vie, 12 Feb 2027, 4:00 am",
      celebrationPlace: "Centro de eventos PuraLodge",
      celebrationAddress:
        "Lagunillas Callejón, 5385, Biobío, Bío Bío, Chile",
      celebrationDressCode: "Código de Vestimenta Formal/etiqueta opcional",
      celebrationDesc:
        "Nuestra celebración contará con un cóctel extendido, seguido de una fiesta inolvidable",
      map: "Mapa",
      addToCalendar: "Agregar al calendario",
      churchMapTitle: "Mapa de la iglesia",
      lodgeMapTitle: "Mapa de Pura Lodge",
      ceremonyPhotoAlt: "Ceremonia",
      celebrationPhotoAlt: "Celebración",
      celebrationCarouselAria: "Fotos de celebración",
      prevPhoto: "Foto anterior",
      nextPhoto: "Foto siguiente",
      dotsAria: "Indicadores de foto",
      goToPhoto: "Ir a foto",
    },
    regalos: {
      kicker: "Regalos",
      title: "Lista de novios",
      copy: "Si desean hacernos un regalo, aquí encontrarán nuestra lista en Falabella. Haz clic para ver todos los productos.",
      previewTitle: "Lista de novios",
      previewCta: "Ver regalos →",
      previewHover: "Abrir en Falabella →",
      ariaLabel: "Ver lista de novios en Falabella",
    },
    confirma: {
      title: "Confirma acá",
      copy: "Confírmanos tu asistencia para acompañarnos en este día tan especial.",
      name: "Nombre",
      lastName: "Apellido",
      phone: "Teléfono",
      email: "Correo",
      attending: "¿Confirmas asistencia?",
      selectOption: "Selecciona una opción",
      yes: "Sí, asistiré",
      no: "No podré asistir",
      message: "Mensaje adicional",
      optional: "Opcional",
      submit: "Enviar confirmación",
      success: "Gracias, tu confirmación fue enviada.",
      missingEndpoint: "Falta configurar el endpoint del formulario.",
      missingFields: "Completa los campos obligatorios antes de enviar.",
      sending: "Enviando confirmación...",
      helpTitle: "Nos haría muy felices verte allá",
      helpCopy:
        "Cada persona que nos acompaña forma parte de esta historia, y tu presencia haría este día todavía más especial para nosotros.",
      iframeTitle: "Envío RSVP",
    },
    footer: {
      line1: "Por todos los días del camino",
      line2: "Gabriela & Diego",
    },
    titles: {
      home: "Home | Gabriela & Diego",
      detalles: "Detalles | Gabriela & Diego",
      regalos: "Regalos | Gabriela & Diego",
      confirma: "Confirma acá | Gabriela & Diego",
      intro: "Gabriela & Diego",
    },
    toggle: {
      aria: "Cambiar idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      detalles: "Details",
      regalos: "Gifts",
      confirma: "RSVP",
    },
    intro: {
      title: "You're invited to our wedding",
      warning: "This invitation is personal",
    },
    home: {
      heroScript: "we're getting married!",
      location: "San Pedro de la Paz",
      date: "February 11, 2027",
      countdownAria: "Countdown to the wedding",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
    detalles: {
      titleDate: "Thursday, February 11, 2027",
      ceremony: "Ceremony",
      ceremonyTime: "4:30 pm - 6:00 pm",
      ceremonyPlace: "San Pedro Evangelical Baptist Church",
      ceremonyAddress: "San Pedro de la Paz, Bío Bío, Chile",
      dressCodeFormal: "Dress code: Formal / Black tie optional",
      celebration: "Celebration",
      celebrationTime:
        "Thu, Feb 11, 2027, 6:00 pm - Fri, Feb 12, 2027, 4:00 am",
      celebrationPlace: "PuraLodge Event Center",
      celebrationAddress:
        "Lagunillas Callejón, 5385, Biobío, Bío Bío, Chile",
      celebrationDressCode: "Dress code: Formal / Black tie optional",
      celebrationDesc:
        "Our celebration will feature an extended cocktail hour, followed by an unforgettable party",
      map: "Map",
      addToCalendar: "Add to calendar",
      churchMapTitle: "Church map",
      lodgeMapTitle: "Pura Lodge map",
      ceremonyPhotoAlt: "Ceremony",
      celebrationPhotoAlt: "Celebration",
      celebrationCarouselAria: "Celebration photos",
      prevPhoto: "Previous photo",
      nextPhoto: "Next photo",
      dotsAria: "Photo indicators",
      goToPhoto: "Go to photo",
    },
    regalos: {
      kicker: "Gifts",
      title: "Wedding registry",
      copy: "If you'd like to give us a gift, you'll find our Falabella registry here. Click to browse all items.",
      previewTitle: "Wedding registry",
      previewCta: "View gifts →",
      previewHover: "Open on Falabella →",
      ariaLabel: "View wedding registry on Falabella",
    },
    confirma: {
      title: "RSVP here",
      copy: "Confirm your attendance to celebrate this special day with us.",
      name: "First name",
      lastName: "Last name",
      phone: "Phone",
      email: "Email",
      attending: "Will you attend?",
      selectOption: "Select an option",
      yes: "Yes, I'll attend",
      no: "Sorry, can't make it",
      message: "Additional message",
      optional: "Optional",
      submit: "Send RSVP",
      success: "Thank you, your RSVP has been sent.",
      missingEndpoint: "Form endpoint is not configured.",
      missingFields: "Please complete the required fields before sending.",
      sending: "Sending RSVP...",
      helpTitle: "It would make us so happy to see you there",
      helpCopy:
        "Every person who joins us is part of this story, and your presence would make this day even more special for us.",
      iframeTitle: "RSVP submission",
    },
    footer: {
      line1: "For all the days along the way",
      line2: "Gabriela & Diego",
    },
    titles: {
      home: "Home | Gabriela & Diego",
      detalles: "Details | Gabriela & Diego",
      regalos: "Gifts | Gabriela & Diego",
      confirma: "RSVP | Gabriela & Diego",
      intro: "Gabriela & Diego",
    },
    toggle: {
      aria: "Change language",
    },
  },
};

export type Dictionary = Dict;
