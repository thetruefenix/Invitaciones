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
    usefulTitle: string;
    usefulArrivalLabel: string;
    usefulArrivalValue: string;
    usefulParkingLabel: string;
    usefulParkingValue: string;
    usefulDressLabel: string;
    usefulDressValue: string;
    usefulGuestsLabel: string;
    usefulGuestsValue: string;
  };
  regalos: {
    kicker: string;
    title: string;
    copy: string;
    leadLine: string;
    gentleNote: string;
    cardNote: string;
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
    successTitle: string;
    successCopy: string;
    successNote: string;
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
    farewellTitle: string;
    farewellCopy: string;
    iframeTitle: string;
  };
  footer: { line1: string; cite: string; line2: string };
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
      warning: "Esta invitación es personal e intransferible",
    },
    home: {
      heroScript: "we're getting married!",
      location: "San Pedro de la Paz",
      date: "11 de Febrero de 2027",
      countdownAria: "Cuenta regresiva para la boda",
      summaryCeremonyLabel: "Ceremonia",
      summaryCeremonyValue: "4:45 pm en la iglesia",
      summaryCelebrationLabel: "Celebración",
      summaryCelebrationValue: "Desde las 6:00 pm en PuraLodge",
      summaryDressLabel: "Dress code",
      summaryDressValue: "Formal / Etiqueta opcional",
      scriptureTitle: "Versículos para este día",
      scriptureOne:
        "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.",
      scriptureOneRef: "Colosenses 3:14",
      scriptureTwo:
        "Mejores son dos que uno; porque tienen mejor paga de su trabajo.",
      scriptureTwoRef: "Eclesiastés 4:9",
      days: "días",
      hours: "horas",
      minutes: "minutos",
      seconds: "segundos",
    },
    detalles: {
      titleDate: "Jueves, 11 de Febrero, 2027",
      ceremony: "Ceremonia",
      ceremonyTime: "4:45 pm - 6:00 pm",
      ceremonyPlace: "Iglesia Evangélica Bautista de San Pedro",
      ceremonyAddress: "San Pedro de la Paz, Biobío, Chile",
      dressCodeFormal: "Código de vestimenta Formal / Etiqueta opcional",
      celebration: "Celebración",
      celebrationTime:
        "Jue, 11 Feb 2027, 6:00 pm - Vie, 12 Feb 2027, 4:00 am",
      celebrationPlace: "Centro de eventos PuraLodge",
      celebrationAddress:
        "Callejón Lagunillas 5385, San Pedro de la Paz, Biobío, Chile",
      celebrationDressCode: "Código de vestimenta Formal / Etiqueta opcional",
      celebrationDesc:
        "Nuestra celebración contará con un cóctel extendido, seguido de una fiesta inolvidable.",
      map: "Mapa",
      addToCalendar: "Agregar al calendario",
      churchMapTitle: "Mapa de la iglesia",
      lodgeMapTitle: "Mapa de PuraLodge",
      ceremonyPhotoAlt: "Ceremonia",
      celebrationPhotoAlt: "Celebración",
      celebrationCarouselAria: "Fotos de celebración",
      prevPhoto: "Foto anterior",
      nextPhoto: "Foto siguiente",
      dotsAria: "Indicadores de foto",
      goToPhoto: "Ir a foto",
      transitionLine: "Después del sí, los esperamos para celebrar juntos.",
      showDetail: "Ver detalle",
      hideDetail: "Ocultar detalle",
      usefulTitle: "Información útil",
      usefulArrivalLabel: "Llegada sugerida",
      usefulArrivalValue: "15 a 20 minutos antes para recibirlos con calma.",
      usefulParkingLabel: "Estacionamiento",
      usefulParkingValue:
        "La iglesia y el centro de eventos cuentan con espacio para estacionar.",
      usefulDressLabel: "Vestimenta",
      usefulDressValue: "Formal / Etiqueta opcional durante toda la jornada.",
      usefulGuestsLabel: "Acompañantes",
      usefulGuestsValue:
        "Agradecemos confirmar solo a las personas consideradas en esta invitación.",
    },
    regalos: {
      kicker: "Regalos",
      title: "Lista de novios",
      copy:
        "Si desean hacernos un regalo, aqui encontraran nuestra lista en Falabella.",
      leadLine: "Su compañía es el mejor regalo para nosotros.",
      gentleNote:
        "Y si además quieren tener un detalle con nosotros, preparamos esta lista con mucho cariño.",
      cardNote: "Haz clic para abrir la lista completa de regalos.",
      previewTitle: "Lista de novios",
      previewCta: "Ver regalos",
      previewHover: "Abrir en Falabella",
      ariaLabel: "Ver lista de novios en Falabella",
    },
    confirma: {
      title: "Confirma acá",
      copy:
        "Confírmanos tu asistencia para acompañarnos en este día tan especial.",
      name: "Nombre",
      lastName: "Apellido",
      countryCode: "Código de país",
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
      successTitle: "Gracias por acompañarnos",
      successCopy:
        "Tu respuesta ya quedó registrada y nos ayuda mucho a preparar este día con cariño.",
      successNote:
        "Si quieres, puedes volver a recorrer la invitación y revisar los detalles del evento.",
      missingEndpoint: "Falta configurar el endpoint del formulario.",
      missingFields: "Completa los campos obligatorios antes de enviar.",
      requiredField: "Completa este campo antes de enviar.",
      invalidFields: "Revisa el formato de los campos antes de enviar.",
      phoneFormat: "Ingresa solo números, sin espacios ni símbolos.",
      phoneLength:
        "Revisa el largo del número para el código de país seleccionado.",
      digits: "dígitos",
      emailFormat:
        "Ingresa un correo válido, por ejemplo nombre@correo.com.",
      sending: "Enviando confirmación...",
      deliveryPending:
        "No pudimos verificar visualmente el envío. Si no ves el correo de confirmación, intenta nuevamente.",
      helpTitle: "Nos haría muy felices verte allá",
      helpCopy:
        "Cada persona que nos acompaña forma parte de esta historia, y tu presencia haría este día todavía más especial para nosotros.",
      farewellTitle: "Con amor, Gabriela & Diego",
      farewellCopy: "Gracias por tomarte el tiempo para confirmar.",
      iframeTitle: "Envío RSVP",
    },
    footer: {
      line1: "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.",
      cite: "Colosenses 3:14",
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
      warning: "This invitation is personal and non-transferable",
    },
    home: {
      heroScript: "we're getting married!",
      location: "San Pedro de la Paz",
      date: "February 11, 2027",
      countdownAria: "Countdown to the wedding",
      summaryCeremonyLabel: "Ceremony",
      summaryCeremonyValue: "4:45 pm at the church",
      summaryCelebrationLabel: "Celebration",
      summaryCelebrationValue: "From 6:00 pm at PuraLodge",
      summaryDressLabel: "Dress code",
      summaryDressValue: "Formal / Black tie optional",
      scriptureTitle: "Verses for this day",
      scriptureOne:
        "And over all these virtues put on love, which binds them all together.",
      scriptureOneRef: "Colossians 3:14",
      scriptureTwo:
        "Two are better than one, because they have a good return for their labor.",
      scriptureTwoRef: "Ecclesiastes 4:9",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
    },
    detalles: {
      titleDate: "Thursday, February 11, 2027",
      ceremony: "Ceremony",
      ceremonyTime: "4:45 pm - 6:00 pm",
      ceremonyPlace: "San Pedro Baptist Church",
      ceremonyAddress: "San Pedro de la Paz, Biobío, Chile",
      dressCodeFormal: "Dress code: Formal / Black tie optional",
      celebration: "Celebration",
      celebrationTime:
        "Thu, Feb 11, 2027, 6:00 pm - Fri, Feb 12, 2027, 4:00 am",
      celebrationPlace: "PuraLodge Event Center",
      celebrationAddress:
        "Lagunillas Alley 5385, San Pedro de la Paz, Biobío, Chile",
      celebrationDressCode: "Dress code: Formal / Black tie optional",
      celebrationDesc:
        "Our celebration will feature an extended cocktail hour followed by an unforgettable party.",
      map: "Map",
      addToCalendar: "Add to calendar",
      churchMapTitle: "Church map",
      lodgeMapTitle: "PuraLodge map",
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
      usefulTitle: "Useful information",
      usefulArrivalLabel: "Suggested arrival",
      usefulArrivalValue: "Please arrive 15 to 20 minutes early to settle in.",
      usefulParkingLabel: "Parking",
      usefulParkingValue:
        "Both the church and the event center have parking available.",
      usefulDressLabel: "Dress code",
      usefulDressValue: "Formal / Black tie optional throughout the day.",
      usefulGuestsLabel: "Guests",
      usefulGuestsValue:
        "Please RSVP only for the guests included in this invitation.",
    },
    regalos: {
      kicker: "Gifts",
      title: "Wedding registry",
      copy:
        "If you would like to give us a gift, you will find our Falabella registry here.",
      leadLine: "Your presence is truly the best gift for us.",
      gentleNote:
        "And if you would also like to treat us to something special, we lovingly put together this registry.",
      cardNote: "Click to open the full registry.",
      previewTitle: "Wedding registry",
      previewCta: "View gifts",
      previewHover: "Open on Falabella",
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
      no: "Sorry, I can't make it",
      message: "Additional message",
      optional: "Optional",
      submit: "Send RSVP",
      success: "Thank you, your RSVP has been sent.",
      successTitle: "Thank you for celebrating with us",
      successCopy:
        "Your reply has been recorded and helps us prepare this day with care.",
      successNote:
        "If you would like, you can continue exploring the invitation and event details.",
      missingEndpoint: "The form endpoint is not configured.",
      missingFields: "Please complete the required fields before sending.",
      requiredField: "Complete this field before sending.",
      invalidFields: "Please review the field formats before sending.",
      phoneFormat: "Enter numbers only, without spaces or symbols.",
      phoneLength: "Check the phone length for the selected country code.",
      digits: "digits",
      emailFormat:
        "Enter a valid email address, for example name@email.com.",
      sending: "Sending RSVP...",
      deliveryPending:
        "We could not visually verify the submission. If you do not receive the confirmation email, please try again.",
      helpTitle: "It would make us so happy to see you there",
      helpCopy:
        "Every person who joins us is part of this story, and your presence would make this day even more special for us.",
      farewellTitle: "With love, Gabriela & Diego",
      farewellCopy: "Thank you for taking the time to RSVP.",
      iframeTitle: "RSVP submission",
    },
    footer: {
      line1: "And over all these virtues put on love, which binds them all together.",
      cite: "Colossians 3:14",
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
