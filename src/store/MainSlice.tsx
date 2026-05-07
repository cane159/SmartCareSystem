import { createSlice } from '@reduxjs/toolkit';
import { RequestModel } from '../models/RequestModel';
import Helpers from '../utils/Helpers';

interface State {
  listRequest: RequestModel[];
}

const initialState: State = {
  listRequest: [
    {
      id: '1',
      title: 'test01',
      description: 'Test01',
      createdAt: '2026-05-06T13:12:13.000Z',
    },
    {
      id: '2',
      title: 'What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      createdAt: '2026-05-06T13:14:15.000Z',
    },
    {
      id: '3',
      title: `30 Words30 Words30 Words30 Words30 Words`,
      description: `Cras orci dolor, pharetra vel dignissim a, sollicitudin id elit. Integer ipsum ex, imperdiet at sodales quis, commodo tincidunt dolor. Curabitur quis nisl vel dui sagittis sagittis. Proin pulvinar dolor.`,
      createdAt: '2026-05-06T13:16:17.000Z',
    },
    {
      id: '4245546',
      title: `20 Words20 Words20 Words20 Words20 Words`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non eros ac tortor ultricies dignissim. Ut suscipit malesuada lectus ut.`,
      createdAt: '2026-05-06T13:18:19.000Z',
    },
    {
      id: '786045',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:20:21.000Z',
    },
    {
      id: '45924',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:22:23.000Z',
    },
    {
      id: '481564',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:24:25.000Z',
    },
    {
      id: '786724',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:26:27.000Z',
    },
    {
      id: '398734524',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:28:29.000Z',
    },
    {
      id: '7834564',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:30:31.000Z',
    },
    {
      id: '4567',
      title: `Where can I get some?`,
      description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable`,
      createdAt: '2026-05-06T13:32:33.000Z',
    },
  ],
};

const mainSlice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    addRequest: (state, action) => {
      const listId = state.listRequest.map(item => Number(item.id));
      state.listRequest.push({
        id: Helpers.uniqueRandomNumber(listId, 1, 99999),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
      });
    },
  },
});

export const { addRequest } = mainSlice.actions;

export default mainSlice;
