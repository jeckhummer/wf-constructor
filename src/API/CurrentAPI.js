import {createAPI} from './API';
import {API as _MockAPI} from './MockAPI';

export const API = process.env.NODE_ENV === "development" ? _MockAPI : createAPI();