import asyncMqtt from 'async-mqtt';
import env from './environment.service';

export default clientId =>
  asyncMqtt.connect(
    env.get().leaBroker,
    { clientId }
  );
