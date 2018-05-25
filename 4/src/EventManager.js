export default class EventManager{

  constructor(events, types) {
        this.events = events.filter(e => types.indexOf(e.type) > -1);
        this.types = types;
        this.time = 0;
    }

    ShowEvent() {
        let event = (this.events).filter(e => e.second === this.time/1000);
        if( event.length > 0) {
            event = {
                'type': event[0]['type'],
                'message': event[0]['message'],
            }
            console.log("At second", this.time/1000, ":", event);
        }
        this.time += 1000;


    run() {
        console.log("RUNNING");
        setInterval(this.ShowEvent.bind(this), 1000);
    }
};
