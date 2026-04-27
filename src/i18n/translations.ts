export type Lang = "es" | "en";

type Dict = {
  nav: { home: string; detalles: string; regalos: string; confirma: string };
  intro: { title: string; warning: string };
  home: {
    heroScript: string;
    location: string;
    date: string;
    countdownAria: string;
    summaryCeremonyLabel: string;
    summaryCeremonyValue: string;
    summaryCelebrationLabel: string;
    summaryCelebrationValue: string;
    summaryDressLabel: string;
    summaryDressValue: string;
    scriptureTitle: string;
    scriptureOne: string;
    scriptureOneRef: string;
    scriptureTwo: string;
    scriptureTwoRef: string;
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
    transitionLine: string;
    showDetail: string;
    hideDetail: string;
  };
  regalos: {
    kicker: string;
    title: string;
    copy: string;
    gentleNote: string;
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
    countryCode: string;
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
    requiredField: string;
    invalidFields: string;
    phoneFormat: string;
    phoneLength: string;
    digits: string;
    emailFormat: string;
    sending: string;
    deliveryPending: string;
    helpTitle: string;
    helpCopy: string;
    iframeTitle: string;
  };
  footer: { line1: string; line2: string };
  guide: { home: string; detalles: string; regalos: string };
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
      heroScript: "we're getting married!",
      location: "San Pedro de la Paz",
      date: "11 de Febrero de 2027",
      countdownAria: "Cuenta regresiva para la boda",
      summaryCeremonyLabel: "Ceremonia",
      summaryCeremonyValue: "4:30 pm en la iglesia",
      summaryCelebrationLabel: "Celebracion",
      summaryCelebrationValue: "Desde las 6:00 pm en PuraLodge",
      summaryDressLabel: "Dress code",
      summaryDressValue: "Formal / Etiqueta opcional",
      scriptureTitle: "Versiculos para este dia",
      scriptureOne: "Y sobre todas estas cosas vestios de amor, que es el vinculo perfecto.",
      scriptureOneRef: "Colosenses 3:14",
      scriptureTwo: "Mejores son dos que uno; porque tienen mejor paga de su trabajo.",
      scriptureTwoRef: "Eclesiastes 4:9",
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
      transitionLine: "Despues del si, los esperamos para celebrar juntos.",
      showDetail: "Ver detalle",
      hideDetail: "Ocultar detalle",
    },
    regalos: {
      kicker: "Regalos",
      title: "Lista de novios",
      copy: "Si desean hacernos un regalo, aquí encontrarán nuestra lista en Falabella. Haz clic para ver todos los productos.",
      gentleNote:
        "Su presencia es nuestro mejor regalo, y si quieren ademas tener un detalle con nosotros, aqui encontraran nuestra lista.",
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
      countryCode: "Codigo de pais",
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
      requiredField: "Completa este campo antes de enviar.",
      invalidFields: "Revisa el formato del telefono o correo antes de enviar.",
      phoneFormat: "Ingresa solo numeros, sin espacios ni simbolos.",
      phoneLength: "Revisa el largo del numero para el codigo de pais seleccionado.",
      digits: "digitos",
      emailFormat: "Ingresa un correo valido, por ejemplo nombre@correo.com.",
      sending: "Enviando confirmación...",
      deliveryPending:
        "No pudimos verificar visualmente el envio. Si no ves el correo de confirmacion, intenta nuevamente.",
      helpTitle: "Nos haría muy felices verte allá",
      helpCopy:
        "Cada persona que nos acompaña forma parte de esta historia, y tu presencia haría este día todavía más especial para nosotros.",
      iframeTitle: "Envío RSVP",
    },
    footer: {
      line1: "For all the days along the way",
      line2: "Gabriela & Diego",
    },
    guide: {
      home: "Ver detalles",
      detalles: "Ver regalos",
      regalos: "Confirmar asistencia",
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
      summaryCeremonyLabel: "Ceremony",
      summaryCeremonyValue: "4:30 pm at the church",
      summaryCelebrationLabel: "Celebration",
      summaryCelebrationValue: "From 6:00 pm at PuraLodge",
      summaryDressLabel: "Dress code",
      summaryDressValue: "Formal / Black tie optional",
      scriptureTitle: "Verses for this day",
      scriptureOne: "And over all these virtues put on love, which binds them all together.",
      scriptureOneRef: "Colossians 3:14",
      scriptureTwo: "Two are better than one, because they have a good return for their labor.",
      scriptureTwoRef: "Ecclesiastes 4:9",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
    detalles: {
      titleDate: "Thursday, February 11, 2027",
      ceremony: "Ceremony",
      ceremonyTime: "4:30 pm - 6:00 pm",
      ceremonyPlace: "Iglesia Evangélica Bautista de San Pedro",
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
      transitionLine: "After the yes, we would love to celebrate together with you.",
      showDetail: "View details",
      hideDetail: "Hide details",
    },
    regalos: {
      kicker: "Gifts",
      title: "Wedding registry",
      copy: "If you'd like to give us a gift, you'll find our Falabella registry here. Click to browse all items.",
      gentleNote:
        "Your presence is our favorite gift, and if you would also like to treat us to something special, you can find our registry here.",
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
      countryCode: "Country code",
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
      requiredField: "Complete this field before sending.",
      invalidFields: "Please check the phone or email format before sending.",
      phoneFormat: "Enter numbers only, without spaces or symbols.",
      phoneLength: "Check the phone length for the selected country code.",
      digits: "digits",
      emailFormat: "Enter a valid email, for example name@email.com.",
      sending: "Sending RSVP...",
      deliveryPending:
        "We could not visually verify the submission. If you do not receive the confirmation email, please try again.",
      helpTitle: "It would make us so happy to see you there",
      helpCopy:
        "Every person who joins us is part of this story, and your presence would make this day even more special for us.",
      iframeTitle: "RSVP submission",
    },
    footer: {
      line1: "For all the days along the way",
      line2: "Gabriela & Diego",
    },
    guide: {
      home: "View details",
      detalles: "View gifts",
      regalos: "RSVP",
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
