import type { IAvatar } from "./avatar";
import type { ICalendar } from "./calendar";
import type { ITableOfContent } from "./common";
import type { IInterestsSection } from "./interests";
import type { IIntroSection } from "./intro";
import type { IPhilosophySection } from "./philosophy";
import type { IStudiesSection } from "./studies";
import type { ITechnicalSection } from "./technical";
import type { IWorkSection } from "./work";
import type { IPage } from "@/types/shared/page";

export interface IAbout extends IPage {
  tableOfContent: ITableOfContent;
  avatar: IAvatar;
  calendar: ICalendar;
  intro: IIntroSection;
  philosophy: IPhilosophySection;
  interests: IInterestsSection;
  work: IWorkSection;
  studies: IStudiesSection;
  technical: ITechnicalSection;
}
