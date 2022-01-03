

import { eachWeekendOfInterval as _eachWeekendOfInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const eachWeekendOfInterval = reactify(_eachWeekendOfInterval);