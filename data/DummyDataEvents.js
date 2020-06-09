import Event from '../models/Event';

export const EVENTS = [
    new Event('e001', '12:00', 'Test outdoors lighting'),
    new Event('e002', '14:10', 'Pick Carol from School'),
    new Event('e003', '18:00', 'Pick Carol from Piano')
];

//(2) Como está definido en Event.js dentro de models, las propiedades son (id, time, description). Aqui se importaría la página de AddEvent o EditEvent con sus props
//para asignarlos a las propiedades en vez de texto a secas.