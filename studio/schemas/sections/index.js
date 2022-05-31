import heroSection, { heroInfo, heroSectionSB } from "./hero-section";
import sponsorSection, {
	sponsorInfo,
	sponsorSectionSB,
} from "./sponsor-section";
import teamSection, { teamInfo, teamSectionSB } from "./team-section";
import collaboratorsSection, {
	collaboratorsInfo,
	collaboratorsSectionSB,
} from "./collaborators-section";
import newsSection, { newsInfo, newsSectionSB } from "./news-section";
import cardSection, { cardInfo, cardSectionSB } from "./card-section";
import headerSection, { headerInfo, headerSectionSB } from "./header-section";

export const sectionsSB = {
	heroSectionSB,
	sponsorSectionSB,
	teamSectionSB,
	collaboratorsSectionSB,
	newsSectionSB,
	headerSectionSB,
};

export const sectionsInfo = {
	heroInfo,
	sponsorInfo,
	teamInfo,
	collaboratorsInfo,
	newsInfo,
	headerInfo,
	cardInfo,
};

export default [
	heroSection,
	headerSection,
	sponsorSection,
	teamSection,
	collaboratorsSection,
	newsSection,
	cardSection,
];
