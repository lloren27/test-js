import EventManager from './EventManager';
import Event from './Event';

export default class EventManagerFactory{
    static create(events, types) {
        console.log (events)
        return new EventManager(events,types);
    }
};
