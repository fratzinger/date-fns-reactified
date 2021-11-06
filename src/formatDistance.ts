import { formatDistance as _formatDistance } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatDistance = reactify(_formatDistance);