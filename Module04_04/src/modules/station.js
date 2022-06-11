import { Column } from './column.js';
import { RenderStation } from './renderStation.js';

export class Station {
    #queue = [];
    #filling = [];
    #ready = [];
    constructor(typeStation, renderApp = null) {
        this.typeStation = typeStation;
        this.renderApp = renderApp;
        this.renderStation = null;
    }

    get filling() { return this.#filling }
    get queue() { return this.#queue }

    init() {
        this.buildColumnsByTypeStations();

        this.setRenderStation();

        setInterval(() => {
            this.checkQueueToFilling();
        }, 1000);
    }

    buildColumnsByTypeStations() {
        for (const optionStation of this.typeStation) {
            if (typeof optionStation.count == 'undefined')
                optionStation.count = 1;

            if (typeof optionStation.speed == 'undefined')
                optionStation.speed = 5;

            for (let i = 0; i < optionStation.count; i++) {
                this.#filling.push(new Column(optionStation.type, optionStation.speed));
            }
        }
    }

    setRenderStation() {
        if (this.renderApp) {
            this.renderStation = new RenderStation(this.renderApp, this);
        }
    }

    checkQueueToFilling() {
        if (this.#queue.length) {
            for (let i = 0; i < this.#queue.length; i++) {
                for (let j = 0; j < this.#filling.length; j++) {
                    if (!this.#filling[j].car && this.#queue[i].typeFuel === this.#filling[j].type) {
                        this.#filling[j].car = this.#queue.splice(i, 1)[0];
                        this.fillingGo(this.#filling[j]);
                        this.renderStation.renderStation();
                        break;
                    }
                }
            }
        }
    }

    fillingGo(column) {
        const car = column.car;
        const needPetrol = car.needPetrol;
        let nowTank = car.nowTank;
        const timerId = setInterval(() => {
            nowTank += column.speed;
            if (nowTank >= car.maxTank) {
                clearInterval(timerId);
                const total = car.nowTank - needPetrol;
                car.fillUp();
                column.car = null;
                this.leaveClient({ car, total });
            }
        }, 500);
    }

    leaveClient({ car, total }) {
        this.#ready.push(car);
    }

    addCarQueue(car) {
        this.queue.push(car);
        this.renderStation.renderStation();
    }
}