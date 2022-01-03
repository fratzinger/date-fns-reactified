import { eachYearOfInterval as _eachYearOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachYearOfInterval = reactify(_eachYearOfInterval);