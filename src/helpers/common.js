import { CURRENT_YEAR } from "~/common/constants";

export const disabledYear = (current) => {
    return  current.year() > CURRENT_YEAR || current.year() < 2022
}
