import React from 'react';
import { Message } from '../components';

export default {
  title: 'Message',
};

const payload = `{
  "type": "joined",
  "payload": {
    "user": {
      "id": 1,
      "name": "johnny"
    }
  }
}`;

export const Default = () => <Message payload={payload} createdAt={new Date()} />;
