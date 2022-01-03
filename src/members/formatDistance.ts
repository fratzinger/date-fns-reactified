import { formatDistance as _formatDistance } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatDistance = reactify(_formatDistance);