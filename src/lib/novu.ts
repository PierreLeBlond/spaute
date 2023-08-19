import { NOVU_API_KEY } from "$env/static/private";
import { Novu } from "@novu/node";

export const novu = new Novu(NOVU_API_KEY);