import { TemplateWithData, TemplateGroupSettings, createTemplateEntry, TemplateLayoutsWithSettings } from "./utils";


// TODO: Step 1: Import All templates Layouts Here (like the ones below)

// General templates
import GeneralIntroSlideLayout, { Schema as GeneralIntroSchema, layoutId as GeneralIntroId, layoutName as GeneralIntroName, layoutDescription as GeneralIntroDesc } from "./general/IntroSlideLayout";
import BasicInfoSlideLayout, { Schema as BasicInfoSchema, layoutId as BasicInfoId, layoutName as BasicInfoName, layoutDescription as BasicInfoDesc } from "./general/BasicInfoSlideLayout";
import BulletIconsOnlySlideLayout, { Schema as BulletIconsOnlySchema, layoutId as BulletIconsOnlyId, layoutName as BulletIconsOnlyName, layoutDescription as BulletIconsOnlyDesc } from "./general/BulletIconsOnlySlideLayout";
import BulletWithIconsSlideLayout, { Schema as BulletWithIconsSchema, layoutId as BulletWithIconsId, layoutName as BulletWithIconsName, layoutDescription as BulletWithIconsDesc } from "./general/BulletWithIconsSlideLayout";
import ChartWithBulletsSlideLayout, { Schema as ChartWithBulletsSchema, layoutId as ChartWithBulletsId, layoutName as ChartWithBulletsName, layoutDescription as ChartWithBulletsDesc } from "./general/ChartWithBulletsSlideLayout";
import MetricsSlideLayout, { Schema as MetricsSchema, layoutId as MetricsId, layoutName as MetricsName, layoutDescription as MetricsDesc } from "./general/MetricsSlideLayout";
import MetricsWithImageSlideLayout, { Schema as MetricsWithImageSchema, layoutId as MetricsWithImageId, layoutName as MetricsWithImageName, layoutDescription as MetricsWithImageDesc } from "./general/MetricsWithImageSlideLayout";
import NumberedBulletsSlideLayout, { Schema as NumberedBulletsSchema, layoutId as NumberedBulletsId, layoutName as NumberedBulletsName, layoutDescription as NumberedBulletsDesc } from "./general/NumberedBulletsSlideLayout";
import QuoteSlideLayout, { Schema as QuoteSchema, layoutId as QuoteId, layoutName as QuoteName, layoutDescription as QuoteDesc } from "./general/QuoteSlideLayout";
import TableInfoSlideLayout, { Schema as TableInfoSchema, layoutId as TableInfoId, layoutName as TableInfoName, layoutDescription as TableInfoDesc } from "./general/TableInfoSlideLayout";
import TableOfContentsSlideLayout, { Schema as TableOfContentsSchema, layoutId as TableOfContentsId, layoutName as TableOfContentsName, layoutDescription as TableOfContentsDesc } from "./general/TableOfContentsSlideLayout";
import TeamSlideLayout, { Schema as TeamSchema, layoutId as TeamId, layoutName as TeamName, layoutDescription as TeamDesc } from "./general/TeamSlideLayout";

// Neo general templates
import HeadlineTextWithBulletsAndStatsLayout, { Schema as HeadlineTextWithBulletsAndStatsSchema, layoutId as HeadlineTextWithBulletsAndStatsId, layoutName as HeadlineTextWithBulletsAndStatsName, layoutDescription as HeadlineTextWithBulletsAndStatsDesc } from "./neo-general/HeadlineTextWithBulletsAndStats";
import HeadlineDescriptionWithImageLayout, { Schema as HeadlineDescriptionWithImageSchema, layoutId as HeadlineDescriptionWithImageId, layoutName as HeadlineDescriptionWithImageName, layoutDescription as HeadlineDescriptionWithImageDesc } from "./neo-general/HeadlineDescriptionWithImage";
import HeadlineDescriptionWithDoubleImageLayout, { Schema as HeadlineDescriptionWithDoubleImageSchema, layoutId as HeadlineDescriptionWithDoubleImageId, layoutName as HeadlineDescriptionWithDoubleImageName, layoutDescription as HeadlineDescriptionWithDoubleImageDesc } from "./neo-general/HeadlineDescriptionWithDoubleImage";
import IndexedThreeColumnListLayout, { Schema as IndexedThreeColumnListSchema, layoutId as IndexedThreeColumnListId, layoutName as IndexedThreeColumnListName, layoutDescription as IndexedThreeColumnListDesc } from "./neo-general/IndexedThreeColumnList";
import LayoutTextBlockWithMetricCardsLayout, { Schema as LayoutTextBlockWithMetricCardsSchema, layoutId as LayoutTextBlockWithMetricCardsId, layoutName as LayoutTextBlockWithMetricCardsName, layoutDescription as LayoutTextBlockWithMetricCardsDesc } from "./neo-general/LayoutTextBlockWithMetricCards";
import LeftAlignQuotesLayout, { Schema as LeftAlignQuotesSchema, layoutId as LeftAlignQuotesId, layoutName as LeftAlignQuotesName, layoutDescription as LeftAlignQuotesDesc } from "./neo-general/LeftAlignQuote";
import TitleDescriptionWithTableLayout, { Schema as TitleDescriptionWithTableSchema, layoutId as TitleDescriptionWithTableId, layoutName as TitleDescriptionWithTableName, layoutDescription as TitleDescriptionWithTableDesc } from "./neo-general/TitleDescriptionWithTable";
import ChallengeAndOutcomeWithOneStatLayout, { Schema as ChallengeAndOutcomeWithOneStatSchema, layoutId as ChallengeAndOutcomeWithOneStatId, layoutName as ChallengeAndOutcomeWithOneStatName, layoutDescription as ChallengeAndOutcomeWithOneStatDesc } from "./neo-general/ChallengeAndOutcomeWithOneStat";
import GridBasedEightMetricsSnapshotsLayout, { Schema as GridBasedEightMetricsSnapshotsSchema, layoutId as GridBasedEightMetricsSnapshotsId, layoutName as GridBasedEightMetricsSnapshotsName, layoutDescription as GridBasedEightMetricsSnapshotsDesc } from "./neo-general/GridBasedEightMetricsSnapshots";
import TitleTopDescriptionFourTeamMembersGridLayout, { Schema as TitleTopDescriptionFourTeamMembersGridSchema, layoutId as TitleTopDescriptionFourTeamMembersGridId, layoutName as TitleTopDescriptionFourTeamMembersGridName, layoutDescription as TitleTopDescriptionFourTeamMembersGridDesc } from "./neo-general/TitleTopDescriptionFourTeamMembersGrid";
import TitleThreeColumnRiskConstraintsLayout, { Schema as TitleThreeColumnRiskConstraintsSchema, layoutId as TitleThreeColumnRiskConstraintsId, layoutName as TitleThreeColumnRiskConstraintsName, layoutDescription as TitleThreeColumnRiskConstraintsDesc } from "./neo-general/TitleThreeColumnRiskConstraints";
import ThankYouContactInfoFooterImageSlideLayout, { Schema as ThankYouContactInfoFooterImageSlideSchema, layoutId as ThankYouContactInfoFooterImageSlideId, layoutName as ThankYouContactInfoFooterImageSlideName, layoutDescription as ThankYouContactInfoFooterImageSlideDesc } from "./neo-general/ThankYouContactInfoFooterImageSlide";
import TimelineLayout, { Schema as TimelineLayoutSchema, layoutId as TimelineLayoutId, layoutName as TimelineLayoutName, layoutDescription as TimelineLayoutDesc } from "./neo-general/Timeline";

import TitleWithFullWidthChartLayout, { Schema as TitleWithFullWidthChartSchema, layoutId as TitleWithFullWidthChartId, layoutName as TitleWithFullWidthChartName, layoutDescription as TitleWithFullWidthChartDesc } from "./neo-general/TitleWithFullWidthChart";
import TitleMetricsWithChartLayout, { Schema as TitleMetricsWithChartSchema, layoutId as TitleMetricsWithChartId, layoutName as TitleMetricsWithChartName, layoutDescription as TitleMetricsWithChartDesc } from "./neo-general/TitleMetricsWithChart";
import TitleWithGridBasedHeadingAndDescriptionLayout, { Schema as TitleWithGridBasedHeadingAndDescriptionSchema, layoutId as TitleWithGridBasedHeadingAndDescriptionId, layoutName as TitleWithGridBasedHeadingAndDescriptionName, layoutDescription as TitleWithGridBasedHeadingAndDescriptionDesc } from './neo-general/TitleWithGridBasedHeadingAndDescription'

import TextSplitWithEmphasisBlockLayout, { Schema as TextSplitWithEmphasisBlockSchema, layoutId as TextSplitWithEmphasisBlockId, layoutName as TextSplitWithEmphasisBlockName, layoutDescription as TextSplitWithEmphasisBlockDesc } from './neo-general/TextSplitWithEmphasisBlock'



import BulletIconsOnlySlideNeoGeneralLayout, { Schema as BulletIconsOnlyNeoGeneralSchema, layoutId as BulletIconsOnlyNeoGeneralId, layoutName as BulletIconsOnlyNeoGeneralName, layoutDescription as BulletIconsOnlyNeoGeneralDesc } from "./neo-general/BulletIconsOnlySlideLayout";
import BulletWithIconsSlideNeoGeneralLayout, { Schema as BulletWithIconsNeoGeneralSchema, layoutId as BulletWithIconsNeoGeneralId, layoutName as BulletWithIconsNeoGeneralName, layoutDescription as BulletWithIconsNeoGeneralDesc } from "./neo-general/BulletWithIconsSlideLayout";
import ChartWithBulletsSlideNeoGeneralLayout, { Schema as ChartWithBulletsNeoGeneralSchema, layoutId as ChartWithBulletsNeoGeneralId, layoutName as ChartWithBulletsNeoGeneralName, layoutDescription as ChartWithBulletsNeoGeneralDesc } from "./neo-general/ChartWithBulletsSlideLayout";

import MetricsWithImageSlideNeoGeneralLayout, { Schema as MetricsWithImageNeoGeneralSchema, layoutId as MetricsWithImageNeoGeneralId, layoutName as MetricsWithImageNeoGeneralName, layoutDescription as MetricsWithImageNeoGeneralDesc } from "./neo-general/MetricsWithImageSlideLayout";
import NumberedBulletsSlideNeoGeneralLayout, { Schema as NumberedBulletsNeoGeneralSchema, layoutId as NumberedBulletsNeoGeneralId, layoutName as NumberedBulletsNeoGeneralName, layoutDescription as NumberedBulletsNeoGeneralDesc } from "./neo-general/NumberedBulletsSlideLayout";
import QuoteSlideNeoGeneralLayout, { Schema as QuoteNeoGeneralSchema, layoutId as QuoteNeoGeneralId, layoutName as QuoteNeoGeneralName, layoutDescription as QuoteNeoGeneralDesc } from "./neo-general/QuoteSlideLayout";

import TeamSlideNeoGeneralLayout, { Schema as TeamNeoGeneralSchema, layoutId as TeamNeoGeneralId, layoutName as TeamNeoGeneralName, layoutDescription as TeamNeoGeneralDesc } from "./neo-general/TeamSlideLayout";
import TableOfContentWithoutPageNumberLayout, { Schema as TableOfContentWithoutPageNumberSchema, layoutId as TableOfContentWithoutPageNumberId, layoutName as TableOfContentWithoutPageNumberName, layoutDescription as TableOfContentWithoutPageNumberDesc } from "./neo-general/TableOfContentWithoutPageNumber";
import TitleMetricValueMetricLabelFunnelStagesLayout, { Schema as TitleMetricValueMetricLabelFunnelStagesSchema, layoutId as TitleMetricValueMetricLabelFunnelStagesId, layoutName as TitleMetricValueMetricLabelFunnelStagesName, layoutDescription as TitleMetricValueMetricLabelFunnelStagesDesc } from "./neo-general/TitleMetricValueMetricLabelFunnelStages";
import MultiChartGridSlideLayout, { Schema as MultiChartGridSlideSchema, layoutId as MultiChartGridSlideId, layoutName as MultiChartGridSlideName, layoutDescription as MultiChartGridSlideDesc } from "./neo-general/MultiChartGridSlideLayout";
import TitleDescriptionMultiChartGridWithMetricsLayout, { Schema as TitleDescriptionMultiChartGridWithMetricsSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsId, layoutName as TitleDescriptionMultiChartGridWithMetricsName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsDesc } from "./neo-general/TitleDescriptionMultiChartGridWithMetrics";
import TitleDescriptionMultiChartGridWithBulletsLayout, { Schema as TitleDescriptionMultiChartGridWithBulletsSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsId, layoutName as TitleDescriptionMultiChartGridWithBulletsName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsDesc } from "./neo-general/TitleDescriptionMultiChartGridWithBullets";
import NeoBrutalistIntroLayout, { Schema as NeoBrutalistIntroSchema, layoutId as NeoBrutalistIntroId, layoutName as NeoBrutalistIntroName, layoutDescription as NeoBrutalistIntroDesc } from "./neo-brutalist/NeoBrutalistIntroLayout";
import NeoBrutalistMetricsLayout, { Schema as NeoBrutalistMetricsSchema, layoutId as NeoBrutalistMetricsId, layoutName as NeoBrutalistMetricsName, layoutDescription as NeoBrutalistMetricsDesc } from "./neo-brutalist/NeoBrutalistMetricsLayout";
import NeoBrutalistGridFeaturesLayout, { Schema as NeoBrutalistGridFeaturesSchema, layoutId as NeoBrutalistGridFeaturesId, layoutName as NeoBrutalistGridFeaturesName, layoutDescription as NeoBrutalistGridFeaturesDesc } from "./neo-brutalist/NeoBrutalistGridFeaturesLayout";
import NeoBrutalistTestimonialsLayout, { Schema as NeoBrutalistTestimonialsSchema, layoutId as NeoBrutalistTestimonialsId, layoutName as NeoBrutalistTestimonialsName, layoutDescription as NeoBrutalistTestimonialsDesc } from "./neo-brutalist/NeoBrutalistTestimonialsLayout";

// Soft Bloom templates
import SoftBloomIntroLayout, { Schema as SoftBloomIntroSchema, layoutId as SoftBloomIntroId, layoutName as SoftBloomIntroName, layoutDescription as SoftBloomIntroDesc } from "./soft-bloom/SoftBloomIntroLayout";
import SoftBloomFeaturesLayout, { Schema as SoftBloomFeaturesSchema, layoutId as SoftBloomFeaturesId, layoutName as SoftBloomFeaturesName, layoutDescription as SoftBloomFeaturesDesc } from "./soft-bloom/SoftBloomFeaturesLayout";
import SoftBloomStatsLayout, { Schema as SoftBloomStatsSchema, layoutId as SoftBloomStatsId, layoutName as SoftBloomStatsName, layoutDescription as SoftBloomStatsDesc } from "./soft-bloom/SoftBloomStatsLayout";
import SoftBloomQuoteLayout, { Schema as SoftBloomQuoteSchema, layoutId as SoftBloomQuoteId, layoutName as SoftBloomQuoteName, layoutDescription as SoftBloomQuoteDesc } from "./soft-bloom/SoftBloomQuoteLayout";

// Calm Waves templates
import CalmWavesCoverLayout, { Schema as CalmWavesCoverSchema, layoutId as CalmWavesCoverId, layoutName as CalmWavesCoverName, layoutDescription as CalmWavesCoverDesc } from "./calm-waves/CalmWavesCoverLayout";
import CalmWavesImageLeftLayout, { Schema as CalmWavesImageLeftSchema, layoutId as CalmWavesImageLeftId, layoutName as CalmWavesImageLeftName, layoutDescription as CalmWavesImageLeftDesc } from "./calm-waves/CalmWavesImageLeftLayout";
import CalmWavesImageRightLayout, { Schema as CalmWavesImageRightSchema, layoutId as CalmWavesImageRightId, layoutName as CalmWavesImageRightName, layoutDescription as CalmWavesImageRightDesc } from "./calm-waves/CalmWavesImageRightLayout";
import CalmWavesImageGridLayout, { Schema as CalmWavesImageGridSchema, layoutId as CalmWavesImageGridId, layoutName as CalmWavesImageGridName, layoutDescription as CalmWavesImageGridDesc } from "./calm-waves/CalmWavesImageGridLayout";
import CalmWavesTwoImagesLayout, { Schema as CalmWavesTwoImagesSchema, layoutId as CalmWavesTwoImagesId, layoutName as CalmWavesTwoImagesName, layoutDescription as CalmWavesTwoImagesDesc } from "./calm-waves/CalmWavesTwoImagesLayout";
import CalmWavesContactImageLayout, { Schema as CalmWavesContactImageSchema, layoutId as CalmWavesContactImageId, layoutName as CalmWavesContactImageName, layoutDescription as CalmWavesContactImageDesc } from "./calm-waves/CalmWavesContactImageLayout";

// Salvia Nature templates
import SalviaNatureCoverLayout, { Schema as SalviaNatureCoverSchema, layoutId as SalviaNatureCoverId, layoutName as SalviaNatureCoverName, layoutDescription as SalviaNatureCoverDesc } from "./salvia-nature/SalviaNatureCoverLayout";
import SalviaNatureSplitHeroLayout, { Schema as SalviaNatureSplitHeroSchema, layoutId as SalviaNatureSplitHeroId, layoutName as SalviaNatureSplitHeroName, layoutDescription as SalviaNatureSplitHeroDesc } from "./salvia-nature/SalviaNatureSplitHeroLayout";
import SalviaNatureActionLayout, { Schema as SalviaNatureActionSchema, layoutId as SalviaNatureActionId, layoutName as SalviaNatureActionName, layoutDescription as SalviaNatureActionDesc } from "./salvia-nature/SalviaNatureActionLayout";
import SalviaNatureImageColumnsLayout, { Schema as SalviaNatureImageColumnsSchema, layoutId as SalviaNatureImageColumnsId, layoutName as SalviaNatureImageColumnsName, layoutDescription as SalviaNatureImageColumnsDesc } from "./salvia-nature/SalviaNatureImageColumnsLayout";
import SalviaNatureTwoCardsLayout, { Schema as SalviaNatureTwoCardsSchema, layoutId as SalviaNatureTwoCardsId, layoutName as SalviaNatureTwoCardsName, layoutDescription as SalviaNatureTwoCardsDesc } from "./salvia-nature/SalviaNatureTwoCardsLayout";
import SalviaNatureAboutLayout, { Schema as SalviaNatureAboutSchema, layoutId as SalviaNatureAboutId, layoutName as SalviaNatureAboutName, layoutDescription as SalviaNatureAboutDesc } from "./salvia-nature/SalviaNatureAboutLayout";
import SalviaNatureContactLayout, { Schema as SalviaNatureContactSchema, layoutId as SalviaNatureContactId, layoutName as SalviaNatureContactName, layoutDescription as SalviaNatureContactDesc } from "./salvia-nature/SalviaNatureContactLayout";

// Gradient Mesh templates
import GradientMeshCoverLayout, { Schema as GradientMeshCoverSchema, layoutId as GradientMeshCoverId, layoutName as GradientMeshCoverName, layoutDescription as GradientMeshCoverDesc } from "./gradient-mesh/GradientMeshCoverLayout";
import GradientMeshSplitHeroLayout, { Schema as GradientMeshSplitHeroSchema, layoutId as GradientMeshSplitHeroId, layoutName as GradientMeshSplitHeroName, layoutDescription as GradientMeshSplitHeroDesc } from "./gradient-mesh/GradientMeshSplitHeroLayout";

// Blush Company templates
import BlushCompanyCoverLayout, { Schema as BlushCompanyCoverSchema, layoutId as BlushCompanyCoverId, layoutName as BlushCompanyCoverName, layoutDescription as BlushCompanyCoverDesc } from "./blush-company/BlushCompanyCoverLayout";
import BlushCompanyAboutStoryLayout, { Schema as BlushCompanyAboutStorySchema, layoutId as BlushCompanyAboutStoryId, layoutName as BlushCompanyAboutStoryName, layoutDescription as BlushCompanyAboutStoryDesc } from "./blush-company/BlushCompanyAboutStoryLayout";
import BlushCompanyProjectLayout, { Schema as BlushCompanyProjectSchema, layoutId as BlushCompanyProjectId, layoutName as BlushCompanyProjectName, layoutDescription as BlushCompanyProjectDesc } from "./blush-company/BlushCompanyProjectLayout";
import BlushCompanySocialMediaLayout, { Schema as BlushCompanySocialMediaSchema, layoutId as BlushCompanySocialMediaId, layoutName as BlushCompanySocialMediaName, layoutDescription as BlushCompanySocialMediaDesc } from "./blush-company/BlushCompanySocialMediaLayout";
import BlushCompanyProcessLayout, { Schema as BlushCompanyProcessSchema, layoutId as BlushCompanyProcessId, layoutName as BlushCompanyProcessName, layoutDescription as BlushCompanyProcessDesc } from "./blush-company/BlushCompanyProcessLayout";
import BlushCompanyTeamLayout, { Schema as BlushCompanyTeamSchema, layoutId as BlushCompanyTeamId, layoutName as BlushCompanyTeamName, layoutDescription as BlushCompanyTeamDesc } from "./blush-company/BlushCompanyTeamLayout";
import BlushCompanyContactLayout, { Schema as BlushCompanyContactSchema, layoutId as BlushCompanyContactId, layoutName as BlushCompanyContactName, layoutDescription as BlushCompanyContactDesc } from "./blush-company/BlushCompanyContactLayout";
import BlushCompanyThankYouLayout, { Schema as BlushCompanyThankYouSchema, layoutId as BlushCompanyThankYouId, layoutName as BlushCompanyThankYouName, layoutDescription as BlushCompanyThankYouDesc } from "./blush-company/BlushCompanyThankYouLayout";

// Velvet Haze templates
import VelvetHazeIntroLayout, { Schema as VelvetHazeIntroSchema, layoutId as VelvetHazeIntroId, layoutName as VelvetHazeIntroName, layoutDescription as VelvetHazeIntroDesc } from "./velvet-haze/VelvetHazeIntroLayout";
import VelvetHazeMetricsLayout, { Schema as VelvetHazeMetricsSchema, layoutId as VelvetHazeMetricsId, layoutName as VelvetHazeMetricsName, layoutDescription as VelvetHazeMetricsDesc } from "./velvet-haze/VelvetHazeMetricsLayout";
import VelvetHazeFeaturesLayout, { Schema as VelvetHazeFeaturesSchema, layoutId as VelvetHazeFeaturesId, layoutName as VelvetHazeFeaturesName, layoutDescription as VelvetHazeFeaturesDesc } from "./velvet-haze/VelvetHazeFeaturesLayout";
import VelvetHazeTestimonialsLayout, { Schema as VelvetHazeTestimonialsSchema, layoutId as VelvetHazeTestimonialsId, layoutName as VelvetHazeTestimonialsName, layoutDescription as VelvetHazeTestimonialsDesc } from "./velvet-haze/VelvetHazeTestimonialsLayout";
import VelvetHazeQuoteLayout, { Schema as VelvetHazeQuoteSchema, layoutId as VelvetHazeQuoteId, layoutName as VelvetHazeQuoteName, layoutDescription as VelvetHazeQuoteDesc } from "./velvet-haze/VelvetHazeQuoteLayout";
import VelvetHazeTimelineLayout, { Schema as VelvetHazeTimelineSchema, layoutId as VelvetHazeTimelineId, layoutName as VelvetHazeTimelineName, layoutDescription as VelvetHazeTimelineDesc } from "./velvet-haze/VelvetHazeTimelineLayout";
import VelvetHazeComparisonLayout, { Schema as VelvetHazeComparisonSchema, layoutId as VelvetHazeComparisonId, layoutName as VelvetHazeComparisonName, layoutDescription as VelvetHazeComparisonDesc } from "./velvet-haze/VelvetHazeComparisonLayout";
import VelvetHazeImageGalleryLayout, { Schema as VelvetHazeImageGallerySchema, layoutId as VelvetHazeImageGalleryId, layoutName as VelvetHazeImageGalleryName, layoutDescription as VelvetHazeImageGalleryDesc } from "./velvet-haze/VelvetHazeImageGalleryLayout";

// Dream Studio templates
import DreamStudioIntroLayout, { Schema as DreamStudioIntroSchema, layoutId as DreamStudioIntroId, layoutName as DreamStudioIntroName, layoutDescription as DreamStudioIntroDesc } from "./dream-studio/DreamStudioIntroLayout";
import DreamStudioAboutLayout, { Schema as DreamStudioAboutSchema, layoutId as DreamStudioAboutId, layoutName as DreamStudioAboutName, layoutDescription as DreamStudioAboutDesc } from "./dream-studio/DreamStudioAboutLayout";
import DreamStudioServicesLayout, { Schema as DreamStudioServicesSchema, layoutId as DreamStudioServicesId, layoutName as DreamStudioServicesName, layoutDescription as DreamStudioServicesDesc } from "./dream-studio/DreamStudioServicesLayout";
import DreamStudioCoreValuesLayout, { Schema as DreamStudioCoreValuesSchema, layoutId as DreamStudioCoreValuesId, layoutName as DreamStudioCoreValuesName, layoutDescription as DreamStudioCoreValuesDesc } from "./dream-studio/DreamStudioCoreValuesLayout";
import DreamStudioTimelineLayout, { Schema as DreamStudioTimelineSchema, layoutId as DreamStudioTimelineId, layoutName as DreamStudioTimelineName, layoutDescription as DreamStudioTimelineDesc } from "./dream-studio/DreamStudioTimelineLayout";
import DreamStudioTextShowcaseLayout, { Schema as DreamStudioTextShowcaseSchema, layoutId as DreamStudioTextShowcaseId, layoutName as DreamStudioTextShowcaseName, layoutDescription as DreamStudioTextShowcaseDesc } from "./dream-studio/DreamStudioTextShowcaseLayout";
import DreamStudioExperienceLayout, { Schema as DreamStudioExperienceSchema, layoutId as DreamStudioExperienceId, layoutName as DreamStudioExperienceName, layoutDescription as DreamStudioExperienceDesc } from "./dream-studio/DreamStudioExperienceLayout";
import DreamStudioTestimonialsLayout, { Schema as DreamStudioTestimonialsSchema, layoutId as DreamStudioTestimonialsId, layoutName as DreamStudioTestimonialsName, layoutDescription as DreamStudioTestimonialsDesc } from "./dream-studio/DreamStudioTestimonialsLayout";
import DreamStudioProcessLayout, { Schema as DreamStudioProcessSchema, layoutId as DreamStudioProcessId, layoutName as DreamStudioProcessName, layoutDescription as DreamStudioProcessDesc } from "./dream-studio/DreamStudioProcessLayout";
import DreamStudioSplitContentLayout, { Schema as DreamStudioSplitContentSchema, layoutId as DreamStudioSplitContentId, layoutName as DreamStudioSplitContentName, layoutDescription as DreamStudioSplitContentDesc } from "./dream-studio/DreamStudioSplitContentLayout";
import DreamStudioFeaturesGridLayout, { Schema as DreamStudioFeaturesGridSchema, layoutId as DreamStudioFeaturesGridId, layoutName as DreamStudioFeaturesGridName, layoutDescription as DreamStudioFeaturesGridDesc } from "./dream-studio/DreamStudioFeaturesGridLayout";

// Professional Pitch templates
import PitchIntroLayout, { Schema as PitchIntroSchema, layoutId as PitchIntroId, layoutName as PitchIntroName, layoutDescription as PitchIntroDesc } from "./professional-pitch/PitchIntroLayout";
import PitchAgendaLayout, { Schema as PitchAgendaSchema, layoutId as PitchAgendaId, layoutName as PitchAgendaName, layoutDescription as PitchAgendaDesc } from "./professional-pitch/PitchAgendaLayout";
import PitchProblemSolutionLayout, { Schema as PitchProblemSolutionSchema, layoutId as PitchProblemSolutionId, layoutName as PitchProblemSolutionName, layoutDescription as PitchProblemSolutionDesc } from "./professional-pitch/PitchProblemSolutionLayout";
import PitchMarketOpportunityLayout, { Schema as PitchMarketOpportunitySchema, layoutId as PitchMarketOpportunityId, layoutName as PitchMarketOpportunityName, layoutDescription as PitchMarketOpportunityDesc } from "./professional-pitch/PitchMarketOpportunityLayout";
import PitchBusinessModelLayout, { Schema as PitchBusinessModelSchema, layoutId as PitchBusinessModelId, layoutName as PitchBusinessModelName, layoutDescription as PitchBusinessModelDesc } from "./professional-pitch/PitchBusinessModelLayout";
import PitchTractionMetricsLayout, { Schema as PitchTractionMetricsSchema, layoutId as PitchTractionMetricsId, layoutName as PitchTractionMetricsName, layoutDescription as PitchTractionMetricsDesc } from "./professional-pitch/PitchTractionMetricsLayout";
import PitchFinancialOverviewLayout, { Schema as PitchFinancialOverviewSchema, layoutId as PitchFinancialOverviewId, layoutName as PitchFinancialOverviewName, layoutDescription as PitchFinancialOverviewDesc } from "./professional-pitch/PitchFinancialOverviewLayout";
import PitchGoToMarketLayout, { Schema as PitchGoToMarketSchema, layoutId as PitchGoToMarketId, layoutName as PitchGoToMarketName, layoutDescription as PitchGoToMarketDesc } from "./professional-pitch/PitchGoToMarketLayout";
import PitchCompetitiveLandscapeLayout, { Schema as PitchCompetitiveLandscapeSchema, layoutId as PitchCompetitiveLandscapeId, layoutName as PitchCompetitiveLandscapeName, layoutDescription as PitchCompetitiveLandscapeDesc } from "./professional-pitch/PitchCompetitiveLandscapeLayout";
import PitchTeamLayout, { Schema as PitchTeamSchema, layoutId as PitchTeamId, layoutName as PitchTeamName, layoutDescription as PitchTeamDesc } from "./professional-pitch/PitchTeamLayout";
import PitchProductSnapshotLayout, { Schema as PitchProductSnapshotSchema, layoutId as PitchProductSnapshotId, layoutName as PitchProductSnapshotName, layoutDescription as PitchProductSnapshotDesc } from "./professional-pitch/PitchProductSnapshotLayout";
import PitchClosingLayout, { Schema as PitchClosingSchema, layoutId as PitchClosingId, layoutName as PitchClosingName, layoutDescription as PitchClosingDesc } from "./professional-pitch/PitchClosingLayout";

// Educational Social Science templates
import SocialScienceIntroLayout, { Schema as SocialScienceIntroSchema, layoutId as SocialScienceIntroId, layoutName as SocialScienceIntroName, layoutDescription as SocialScienceIntroDesc } from "./educational-social-science/SocialScienceIntroLayout";
import SocialScienceConceptLayout, { Schema as SocialScienceConceptSchema, layoutId as SocialScienceConceptId, layoutName as SocialScienceConceptName, layoutDescription as SocialScienceConceptDesc } from "./educational-social-science/SocialScienceConceptLayout";
import SocialScienceTimelineLayout, { Schema as SocialScienceTimelineSchema, layoutId as SocialScienceTimelineId, layoutName as SocialScienceTimelineName, layoutDescription as SocialScienceTimelineDesc } from "./educational-social-science/SocialScienceTimelineLayout";
import SocialScienceCaseStudyLayout, { Schema as SocialScienceCaseStudySchema, layoutId as SocialScienceCaseStudyId, layoutName as SocialScienceCaseStudyName, layoutDescription as SocialScienceCaseStudyDesc } from "./educational-social-science/SocialScienceCaseStudyLayout";
import SocialScienceDataInsightsLayout, { Schema as SocialScienceDataInsightsSchema, layoutId as SocialScienceDataInsightsId, layoutName as SocialScienceDataInsightsName, layoutDescription as SocialScienceDataInsightsDesc } from "./educational-social-science/SocialScienceDataInsightsLayout";
import SocialScienceComparisonLayout, { Schema as SocialScienceComparisonSchema, layoutId as SocialScienceComparisonId, layoutName as SocialScienceComparisonName, layoutDescription as SocialScienceComparisonDesc } from "./educational-social-science/SocialScienceComparisonLayout";
import SocialScienceImageExplainerLayout, { Schema as SocialScienceImageExplainerSchema, layoutId as SocialScienceImageExplainerId, layoutName as SocialScienceImageExplainerName, layoutDescription as SocialScienceImageExplainerDesc } from "./educational-social-science/SocialScienceImageExplainerLayout";
import SocialScienceFAQLayout, { Schema as SocialScienceFAQSchema, layoutId as SocialScienceFAQId, layoutName as SocialScienceFAQName, layoutDescription as SocialScienceFAQDesc } from "./educational-social-science/SocialScienceFAQLayout";
import SocialScienceGlossaryLayout, { Schema as SocialScienceGlossarySchema, layoutId as SocialScienceGlossaryId, layoutName as SocialScienceGlossaryName, layoutDescription as SocialScienceGlossaryDesc } from "./educational-social-science/SocialScienceGlossaryLayout";
import SocialScienceSummaryLayout, { Schema as SocialScienceSummarySchema, layoutId as SocialScienceSummaryId, layoutName as SocialScienceSummaryName, layoutDescription as SocialScienceSummaryDesc } from "./educational-social-science/SocialScienceSummaryLayout";

// Tech AI Red templates
import TechAIIntroLayout, { Schema as TechAIIntroSchema, layoutId as TechAIIntroId, layoutName as TechAIIntroName, layoutDescription as TechAIIntroDesc } from "./tech-ai-red/TechAIIntroLayout";
import TechAIPipelineLayout, { Schema as TechAIPipelineSchema, layoutId as TechAIPipelineId, layoutName as TechAIPipelineName, layoutDescription as TechAIPipelineDesc } from "./tech-ai-red/TechAIPipelineLayout";
import TechAIArchitectureLayout, { Schema as TechAIArchitectureSchema, layoutId as TechAIArchitectureId, layoutName as TechAIArchitectureName, layoutDescription as TechAIArchitectureDesc } from "./tech-ai-red/TechAIArchitectureLayout";
import TechAIMetricsLayout, { Schema as TechAIMetricsSchema, layoutId as TechAIMetricsId, layoutName as TechAIMetricsName, layoutDescription as TechAIMetricsDesc } from "./tech-ai-red/TechAIMetricsLayout";
import TechAIModelComparisonLayout, { Schema as TechAIModelComparisonSchema, layoutId as TechAIModelComparisonId, layoutName as TechAIModelComparisonName, layoutDescription as TechAIModelComparisonDesc } from "./tech-ai-red/TechAIModelComparisonLayout";
import TechAIUseCasesLayout, { Schema as TechAIUseCasesSchema, layoutId as TechAIUseCasesId, layoutName as TechAIUseCasesName, layoutDescription as TechAIUseCasesDesc } from "./tech-ai-red/TechAIUseCasesLayout";
import TechAIRiskGovernanceLayout, { Schema as TechAIRiskGovernanceSchema, layoutId as TechAIRiskGovernanceId, layoutName as TechAIRiskGovernanceName, layoutDescription as TechAIRiskGovernanceDesc } from "./tech-ai-red/TechAIRiskGovernanceLayout";
import TechAIRoadmapLayout, { Schema as TechAIRoadmapSchema, layoutId as TechAIRoadmapId, layoutName as TechAIRoadmapName, layoutDescription as TechAIRoadmapDesc } from "./tech-ai-red/TechAIRoadmapLayout";
import TechAITeamLayout, { Schema as TechAITeamSchema, layoutId as TechAITeamId, layoutName as TechAITeamName, layoutDescription as TechAITeamDesc } from "./tech-ai-red/TechAITeamLayout";
import TechAIClosingLayout, { Schema as TechAIClosingSchema, layoutId as TechAIClosingId, layoutName as TechAIClosingName, layoutDescription as TechAIClosingDesc } from "./tech-ai-red/TechAIClosingLayout";

// Dark Space templates
import DarkSpaceIntroLayout, { Schema as DarkSpaceIntroSchema, layoutId as DarkSpaceIntroId, layoutName as DarkSpaceIntroName, layoutDescription as DarkSpaceIntroDesc } from "./dark-space/DarkSpaceIntroLayout";
import DarkSpaceAgendaLayout, { Schema as DarkSpaceAgendaSchema, layoutId as DarkSpaceAgendaId, layoutName as DarkSpaceAgendaName, layoutDescription as DarkSpaceAgendaDesc } from "./dark-space/DarkSpaceAgendaLayout";
import DarkSpaceConceptLayout, { Schema as DarkSpaceConceptSchema, layoutId as DarkSpaceConceptId, layoutName as DarkSpaceConceptName, layoutDescription as DarkSpaceConceptDesc } from "./dark-space/DarkSpaceConceptLayout";
import DarkSpaceArchitectureLayout, { Schema as DarkSpaceArchitectureSchema, layoutId as DarkSpaceArchitectureId, layoutName as DarkSpaceArchitectureName, layoutDescription as DarkSpaceArchitectureDesc } from "./dark-space/DarkSpaceArchitectureLayout";
import DarkSpaceMetricsLayout, { Schema as DarkSpaceMetricsSchema, layoutId as DarkSpaceMetricsId, layoutName as DarkSpaceMetricsName, layoutDescription as DarkSpaceMetricsDesc } from "./dark-space/DarkSpaceMetricsLayout";
import DarkSpaceTimelineLayout, { Schema as DarkSpaceTimelineSchema, layoutId as DarkSpaceTimelineId, layoutName as DarkSpaceTimelineName, layoutDescription as DarkSpaceTimelineDesc } from "./dark-space/DarkSpaceTimelineLayout";
import DarkSpaceComparisonLayout, { Schema as DarkSpaceComparisonSchema, layoutId as DarkSpaceComparisonId, layoutName as DarkSpaceComparisonName, layoutDescription as DarkSpaceComparisonDesc } from "./dark-space/DarkSpaceComparisonLayout";
import DarkSpaceUseCasesLayout, { Schema as DarkSpaceUseCasesSchema, layoutId as DarkSpaceUseCasesId, layoutName as DarkSpaceUseCasesName, layoutDescription as DarkSpaceUseCasesDesc } from "./dark-space/DarkSpaceUseCasesLayout";
import DarkSpaceTeamLayout, { Schema as DarkSpaceTeamSchema, layoutId as DarkSpaceTeamId, layoutName as DarkSpaceTeamName, layoutDescription as DarkSpaceTeamDesc } from "./dark-space/DarkSpaceTeamLayout";
import DarkSpaceClosingLayout, { Schema as DarkSpaceClosingSchema, layoutId as DarkSpaceClosingId, layoutName as DarkSpaceClosingName, layoutDescription as DarkSpaceClosingDesc } from "./dark-space/DarkSpaceClosingLayout";

// Minimalist Mono templates
import MonoIntroLayout, { Schema as MonoIntroSchema, layoutId as MonoIntroId, layoutName as MonoIntroName, layoutDescription as MonoIntroDesc } from "./minimalist-mono/MonoIntroLayout";
import MonoAgendaLayout, { Schema as MonoAgendaSchema, layoutId as MonoAgendaId, layoutName as MonoAgendaName, layoutDescription as MonoAgendaDesc } from "./minimalist-mono/MonoAgendaLayout";
import MonoConceptLayout, { Schema as MonoConceptSchema, layoutId as MonoConceptId, layoutName as MonoConceptName, layoutDescription as MonoConceptDesc } from "./minimalist-mono/MonoConceptLayout";
import MonoMetricsLayout, { Schema as MonoMetricsSchema, layoutId as MonoMetricsId, layoutName as MonoMetricsName, layoutDescription as MonoMetricsDesc } from "./minimalist-mono/MonoMetricsLayout";
import MonoComparisonLayout, { Schema as MonoComparisonSchema, layoutId as MonoComparisonId, layoutName as MonoComparisonName, layoutDescription as MonoComparisonDesc } from "./minimalist-mono/MonoComparisonLayout";
import MonoTimelineLayout, { Schema as MonoTimelineSchema, layoutId as MonoTimelineId, layoutName as MonoTimelineName, layoutDescription as MonoTimelineDesc } from "./minimalist-mono/MonoTimelineLayout";
import MonoUseCasesLayout, { Schema as MonoUseCasesSchema, layoutId as MonoUseCasesId, layoutName as MonoUseCasesName, layoutDescription as MonoUseCasesDesc } from "./minimalist-mono/MonoUseCasesLayout";
import MonoTeamLayout, { Schema as MonoTeamSchema, layoutId as MonoTeamId, layoutName as MonoTeamName, layoutDescription as MonoTeamDesc } from "./minimalist-mono/MonoTeamLayout";
import MonoClosingLayout, { Schema as MonoClosingSchema, layoutId as MonoClosingId, layoutName as MonoClosingName, layoutDescription as MonoClosingDesc } from "./minimalist-mono/MonoClosingLayout";

// Educational Science templates
import EduScienceIntroLayout, { Schema as EduScienceIntroSchema, layoutId as EduScienceIntroId, layoutName as EduScienceIntroName, layoutDescription as EduScienceIntroDesc } from "./educational-science/EduScienceIntroLayout";
import EduScienceConceptLayout, { Schema as EduScienceConceptSchema, layoutId as EduScienceConceptId, layoutName as EduScienceConceptName, layoutDescription as EduScienceConceptDesc } from "./educational-science/EduScienceConceptLayout";
import EduScienceTimelineLayout, { Schema as EduScienceTimelineSchema, layoutId as EduScienceTimelineId, layoutName as EduScienceTimelineName, layoutDescription as EduScienceTimelineDesc } from "./educational-science/EduScienceTimelineLayout";
import EduScienceExperimentLayout, { Schema as EduScienceExperimentSchema, layoutId as EduScienceExperimentId, layoutName as EduScienceExperimentName, layoutDescription as EduScienceExperimentDesc } from "./educational-science/EduScienceExperimentLayout";
import EduScienceDataInsightsLayout, { Schema as EduScienceDataInsightsSchema, layoutId as EduScienceDataInsightsId, layoutName as EduScienceDataInsightsName, layoutDescription as EduScienceDataInsightsDesc } from "./educational-science/EduScienceDataInsightsLayout";
import EduScienceComparisonLayout, { Schema as EduScienceComparisonSchema, layoutId as EduScienceComparisonId, layoutName as EduScienceComparisonName, layoutDescription as EduScienceComparisonDesc } from "./educational-science/EduScienceComparisonLayout";
import EduScienceImageExplainerLayout, { Schema as EduScienceImageExplainerSchema, layoutId as EduScienceImageExplainerId, layoutName as EduScienceImageExplainerName, layoutDescription as EduScienceImageExplainerDesc } from "./educational-science/EduScienceImageExplainerLayout";
import EduScienceFAQLayout, { Schema as EduScienceFAQSchema, layoutId as EduScienceFAQId, layoutName as EduScienceFAQName, layoutDescription as EduScienceFAQDesc } from "./educational-science/EduScienceFAQLayout";
import EduScienceGlossaryLayout, { Schema as EduScienceGlossarySchema, layoutId as EduScienceGlossaryId, layoutName as EduScienceGlossaryName, layoutDescription as EduScienceGlossaryDesc } from "./educational-science/EduScienceGlossaryLayout";
import EduScienceSummaryLayout, { Schema as EduScienceSummarySchema, layoutId as EduScienceSummaryId, layoutName as EduScienceSummaryName, layoutDescription as EduScienceSummaryDesc } from "./educational-science/EduScienceSummaryLayout";



// Modern templates
import ModernIntroSlideLayout, { Schema as ModernIntroSchema, layoutId as ModernIntroId, layoutName as ModernIntroName, layoutDescription as ModernIntroDesc } from "./modern/IntroSlideLayout";
import BulletsWithIconsDescriptionGrid, { Schema as BulletsIconsGridSchema, layoutId as BulletsIconsGridId, layoutName as BulletsIconsGridName, layoutDescription as BulletsIconsGridDesc } from "./modern/BulletsWithIconsDescriptionGrid";
import ModernBulletWithIconsSlideLayout, { Schema as ModernBulletIconsSchema, layoutId as ModernBulletIconsId, layoutName as ModernBulletIconsName, layoutDescription as ModernBulletIconsDesc } from "./modern/BulletWithIconsSlideLayout";
import ChartOrTableWithDescription, { Schema as ChartTableDescSchema, layoutId as ChartTableDescId, layoutName as ChartTableDescName, layoutDescription as ChartTableDescDesc } from "./modern/ChartOrTableWithDescription";
import ChartOrTableWithMetricsDescription, { Schema as ChartMetricsSchema, layoutId as ChartMetricsId, layoutName as ChartMetricsName, layoutDescription as ChartMetricsDesc } from "./modern/ChartOrTableWithMetricsDescription";
import ImageAndDescriptionLayout, { Schema as ImageDescSchema, layoutId as ImageDescId, layoutName as ImageDescName, layoutDescription as ImageDescDesc } from "./modern/ImageAndDescriptionLayout";
import ImageListWithDescriptionSlideLayout, { Schema as ImageListDescSchema, layoutId as ImageListDescId, layoutName as ImageListDescName, layoutDescription as ImageListDescDesc } from "./modern/ImageListWithDescriptionSlideLayout";
import ImagesWithDescriptionLayout, { Schema as ImagesDescSchema, layoutId as ImagesDescId, layoutName as ImagesDescName, layoutDescription as ImagesDescDesc } from "./modern/ImagesWithDescriptionLayout";
import MetricsWithDescription, { Schema as MetricsDescSchema, layoutId as MetricsDescId, layoutName as MetricsDescName, layoutDescription as MetricsDescDesc } from "./modern/MetricsWithDescription";
import ModernTableOfContentsLayout, { Schema as ModernTocSchema, layoutId as ModernTocId, layoutName as ModernTocName, layoutDescription as ModernTocDesc } from "./modern/TableOfContentsLayout";

// Neo modern templates
import TitleDescriptionBulletListModernLayout, { Schema as TitleDescriptionBulletListModernSchema, layoutId as TitleDescriptionBulletListModernId, layoutName as TitleDescriptionBulletListModernName, layoutDescription as TitleDescriptionBulletListModernDesc } from './neo-modern/TitleDescriptionBulletList';
import TitleDescriptionContactListLayout, { Schema as TitleDescriptionContactListSchema, layoutId as TitleDescriptionContactListId, layoutName as TitleDescriptionContactListName, layoutDescription as TitleDescriptionContactListDesc } from './neo-modern/TitleDescriptionContactList';
import TitleDescriptionDualMetricsGridLayout, { Schema as TitleDescriptionDualMetricsGridSchema, layoutId as TitleDescriptionDualMetricsGridId, layoutName as TitleDescriptionDualMetricsGridName, layoutDescription as TitleDescriptionDualMetricsGridDesc } from './neo-modern/TitleDescriptionDualMetricsGrid';
import TitleDescriptionIconTimelineLayout, { Schema as TitleDescriptionIconTimelineSchema, layoutId as TitleDescriptionIconTimelineId, layoutName as TitleDescriptionIconTimelineName, layoutDescription as TitleDescriptionIconTimelineDesc } from './neo-modern/TitleDescriptionIconTimeline';
import TitleDescriptionImageRightModernLayout, { Schema as TitleDescriptionImageRightModernSchema, layoutId as TitleDescriptionImageRightModernId, layoutName as TitleDescriptionImageRightModernName, layoutDescription as TitleDescriptionImageRightModernDesc } from './neo-modern/TitleDescriptionImageRight';
import TitleDescriptionMetricsChartLayout, { Schema as TitleDescriptionMetricsChartSchema, layoutId as TitleDescriptionMetricsChartId, layoutName as TitleDescriptionMetricsChartName, layoutDescription as TitleDescriptionMetricsChartDesc } from './neo-modern/TitleDescriptionMetricsChart';

import TitleDescriptionMetricsImageLayout, { Schema as TitleDescriptionMetricsImageSchema, layoutId as TitleDescriptionMetricsImageId, layoutName as TitleDescriptionMetricsImageName, layoutDescription as TitleDescriptionMetricsImageDesc } from './neo-modern/TitleDescriptionMetricsImage';
import TitleDescriptionMetricsTableLayout, { Schema as TitleDescriptionMetricsTableSchema, layoutId as TitleDescriptionMetricsTableId, layoutName as TitleDescriptionMetricsTableName, layoutDescription as TitleDescriptionMetricsTableDesc } from './neo-modern/TitleDescriptionTable';
import TitleDualComparisonChartsLayout, { Schema as TitleDualComparisonChartsSchema, layoutId as TitleDualComparisonChartsId, layoutName as TitleDualComparisonChartsName, layoutDescription as TitleDualComparisonChartsDesc } from './neo-modern/TitleDualComparisonCharts';
import TitleDualComparisonCardsModernLayout, { Schema as TitleDualComparisonCardsModernSchema, layoutId as TitleDualComparisonCardsModernId, layoutName as TitleDualComparisonCardsModernName, layoutDescription as TitleDualComparisonCardsModernDesc } from './neo-modern/TitleDualComparisonCards';
import TitleHorizontalAltenenatingTimelineLayout, { Schema as TitleHorizontalAltenenatingTimelineSchema, layoutId as TitleHorizontalAltenenatingTimelineId, layoutName as TitleHorizontalAltenenatingTimelineName, layoutDescription as TitleHorizontalAltenenatingTimelineDesc } from './neo-modern/TitleHorizontalAlternatingTimeline';
import TitleKpiSnapshotGridLayout, { Schema as TitleKpiSnapshotGridSchema, layoutId as TitleKpiSnapshotGridId, layoutName as TitleKpiSnapshotGridName, layoutDescription as TitleKpiSnapshotGridDesc } from './neo-modern/TitleKpiSnapshotGrid';
import TitleSubtitlesChartLayout, { Schema as TitleSubtitlesChartSchema, layoutId as TitleSubtitlesChartId, layoutName as TitleSubtitlesChartName, layoutDescription as TitleSubtitlesChartDesc } from './neo-modern/TitleSubtitlesChart';
import TitleTwoColumnNumberListLayout, { Schema as TitleTwoColumnNumberListSchema, layoutId as TitleTwoColumnNumberListId, layoutName as TitleTwoColumnNumberListName, layoutDescription as TitleTwoColumnNumberListDesc } from './neo-modern/TitleTwoColumnNumberedList';
import TitleDescriptionMultiChartGridLayout, { Schema as TitleDescriptionMultiChartGridSchema, layoutId as TitleDescriptionMultiChartGridId, layoutName as TitleDescriptionMultiChartGridName, layoutDescription as TitleDescriptionMultiChartGridDesc } from './neo-modern/TitleDescriptionMultiChartGrid';
import TitleDescriptionMultiChartGridWithMetricsModernLayout, { Schema as TitleDescriptionMultiChartGridWithMetricsModernSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsModernId, layoutName as TitleDescriptionMultiChartGridWithMetricsModernName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsModernDesc } from './neo-modern/TitleDescriptionMultiChartGridWithMetrics';
import TitleDescriptionMultiChartGridWithBulletsModernLayout, { Schema as TitleDescriptionMultiChartGridWithBulletsModernSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsModernId, layoutName as TitleDescriptionMultiChartGridWithBulletsModernName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsModernDesc } from './neo-modern/TitleDescriptionMultiChartGridWithBullets';





// Standard templates
import StandardIntroSlideLayout, { Schema as StandardIntroSchema, layoutId as StandardIntroId, layoutName as StandardIntroName, layoutDescription as StandardIntroDesc } from "./standard/IntroSlideLayout";
import ChartLeftTextRightLayout, { Schema as ChartLeftSchema, layoutId as ChartLeftId, layoutName as ChartLeftName, layoutDescription as ChartLeftDesc } from "./standard/ChartLeftTextRightLayout";
import ContactLayout, { Schema as ContactSchema, layoutId as ContactId, layoutName as ContactName, layoutDescription as ContactDesc } from "./standard/ContactLayout";
import HeadingBulletImageDescriptionLayout, { Schema as HeadingBulletSchema, layoutId as HeadingBulletId, layoutName as HeadingBulletName, layoutDescription as HeadingBulletDesc } from "./standard/HeadingBulletImageDescriptionLayout";
import IconBulletDescriptionLayout, { Schema as IconBulletSchema, layoutId as IconBulletId, layoutName as IconBulletName, layoutDescription as IconBulletDesc } from "./standard/IconBulletDescriptionLayout";
import IconImageDescriptionLayout, { Schema as IconImageSchema, layoutId as IconImageId, layoutName as IconImageName, layoutDescription as IconImageDesc } from "./standard/IconImageDescriptionLayout";
import StandardImageListWithDescriptionLayout, { Schema as StdImageListSchema, layoutId as StdImageListId, layoutName as StdImageListName, layoutDescription as StdImageListDesc } from "./standard/ImageListWithDescriptionLayout";
import MetricsDescriptionLayout, { Schema as MetricsDescLayoutSchema, layoutId as MetricsDescLayoutId, layoutName as MetricsDescLayoutName, layoutDescription as MetricsDescLayoutDesc } from "./standard/MetricsDescriptionLayout";
import NumberedBulletSingleImageLayout, { Schema as NumBulletImgSchema, layoutId as NumBulletImgId, layoutName as NumBulletImgName, layoutDescription as NumBulletImgDesc } from "./standard/NumberedBulletSingleImageLayout";
import StandardTableOfContentsLayout, { Schema as StdTocSchema, layoutId as StdTocId, layoutName as StdTocName, layoutDescription as StdTocDesc } from "./standard/TableOfContentsLayout";
import VisualMetricsSlideLayout, { Schema as VisualMetricsSchema, layoutId as VisualMetricsId, layoutName as VisualMetricsName, layoutDescription as VisualMetricsDesc } from "./standard/VisualMetricsSlideLayout";

// Neo standard templates
import TitleBadgeChartLayout, { Schema as TitleBadgeChartSchema, layoutId as TitleBadgeChartId, layoutName as TitleBadgeChartName, layoutDescription as TitleBadgeChartDesc } from './neo-standard/TitleBadgeChart';
import TitleDescriptionBulletListStandardLayout, { Schema as TitleDescriptionBulletListStandardSchema, layoutId as TitleDescriptionBulletListStandardId, layoutName as TitleDescriptionBulletListStandardName, layoutDescription as TitleDescriptionBulletListStandardDesc } from './neo-standard/TitleDescriptionBulletList';
import TitleDescriptionContactCardsLayout, { Schema as TitleDescriptionContactCardsSchema, layoutId as TitleDescriptionContactCardsId, layoutName as TitleDescriptionContactCardsName, layoutDescription as TitleDescriptionContactCardsDesc } from './neo-standard/TitleDescriptionContactCards';
import TitleDescriptionIconListLayout, { Schema as TitleDescriptionIconListSchema, layoutId as TitleDescriptionIconListId, layoutName as TitleDescriptionIconListName, layoutDescription as TitleDescriptionIconListDesc } from './neo-standard/TitleDescriptionIconList';
import TitleDescriptionImageRightLayout, { Schema as TitleDescriptionImageRightSchema, layoutId as TitleDescriptionImageRightId, layoutName as TitleDescriptionImageRightName, layoutDescription as TitleDescriptionImageRightDesc } from './neo-standard/TitleDescriptionImageRight';
import TitleDescriptionRadialCardsLayout, { Schema as TitleDescriptionRadialCardsSchema, layoutId as TitleDescriptionRadialCardsId, layoutName as TitleDescriptionRadialCardsName, layoutDescription as TitleDescriptionRadialCardsDesc } from './neo-standard/TitleDescriptionRadialCards';
import TitleDescriptionTableLayout, { Schema as TitleDescriptionTableSchema, layoutId as TitleDescriptionTableId, layoutName as TitleDescriptionTableName, layoutDescription as TitleDescriptionTableDesc } from './neo-standard/TitleDescriptionTable';
import TitleDescriptionTimelineLayout, { Schema as TitleDescriptionTimelineSchema, layoutId as TitleDescriptionTimelineId, layoutName as TitleDescriptionTimelineName, layoutDescription as TitleDescriptionTimelineDesc } from './neo-standard/TitleDescriptionTimeline';
import TitleDualChartsComparisonLayout, { Schema as TitleDualChartsComparisonSchema, layoutId as TitleDualChartsComparisonId, layoutName as TitleDualChartsComparisonName, layoutDescription as TitleDualChartsComparisonDesc } from './neo-standard/TitleDualChartsComparison';
import TitleDualComparisonCardsLayout, { Schema as TitleDualComparisonCardsSchema, layoutId as TitleDualComparisonCardsId, layoutName as TitleDualComparisonCardsName, layoutDescription as TitleDualComparisonCardsDesc } from './neo-standard/TitleDualComparisonCards';
import TitleKpiGridLayout, { Schema as TitleKpiGridSchema, layoutId as TitleKpiGridId, layoutName as TitleKpiGridName, layoutDescription as TitleKpiGridDesc } from './neo-standard/TitleKpiGrid';
import TitleMetricsChartLayout, { Schema as TitleMetricsChartSchema, layoutId as TitleMetricsChartId, layoutName as TitleMetricsChartName, layoutDescription as TitleMetricsChartDesc } from './neo-standard/TitleMetricsChart';
import TitleMetricsImageLayout, { Schema as TitleMetricsImageSchema, layoutId as TitleMetricsImageId, layoutName as TitleMetricsImageName, layoutDescription as TitleMetricsImageDesc } from './neo-standard/TitleMetricsImage';
import TitlePointsDonutGridLayout, { Schema as TitlePointsDonutGridSchema, layoutId as TitlePointsDonutGridId, layoutName as TitlePointsDonutGridName, layoutDescription as TitlePointsDonutGridDesc } from './neo-standard/TitlePointsDonutGrid';
import TitleDescriptionMultiChartGridStandardLayout, { Schema as TitleDescriptionMultiChartGridStandardSchema, layoutId as TitleDescriptionMultiChartGridStandardId, layoutName as TitleDescriptionMultiChartGridStandardName, layoutDescription as TitleDescriptionMultiChartGridStandardDesc } from './neo-standard/TitleDescriptionMultiChartGrid';
import TitleDescriptionMultiChartGridWithMetricsStandardLayout, { Schema as TitleDescriptionMultiChartGridWithMetricsStandardSchema, layoutId as TitleDescriptionMultiChartGridWithMetricsStandardId, layoutName as TitleDescriptionMultiChartGridWithMetricsStandardName, layoutDescription as TitleDescriptionMultiChartGridWithMetricsStandardDesc } from './neo-standard/TitleDescriptionMultiChartGridWithMetrics';
import TitleDescriptionMultiChartGridWithBulletsStandardLayout, { Schema as TitleDescriptionMultiChartGridWithBulletsStandardSchema, layoutId as TitleDescriptionMultiChartGridWithBulletsStandardId, layoutName as TitleDescriptionMultiChartGridWithBulletsStandardName, layoutDescription as TitleDescriptionMultiChartGridWithBulletsStandardDesc } from './neo-standard/TitleDescriptionMultiChartGridWithBullets';






// Swift templates
import SwiftIntroSlideLayout, { Schema as SwiftIntroSchema, layoutId as SwiftIntroId, layoutName as SwiftIntroName, layoutDescription as SwiftIntroDesc } from "./swift/IntroSlideLayout";
import BulletsWithIconsTitleDescription, { Schema as BulletsIconsTitleSchema, layoutId as BulletsIconsTitleId, layoutName as BulletsIconsTitleName, layoutDescription as BulletsIconsTitleDesc } from "./swift/BulletsWithIconsTitleDescription";
import IconBulletListDescription, { Schema as IconBulletListSchema, layoutId as IconBulletListId, layoutName as IconBulletListName, layoutDescription as IconBulletListDesc } from "./swift/IconBulletListDescription";
import ImageListDescription, { Schema as ImageListSchema, layoutId as ImageListId, layoutName as ImageListName, layoutDescription as ImageListDesc } from "./swift/ImageListDescription";
import MetricsNumbers, { Schema as MetricsNumbersSchema, layoutId as MetricsNumbersId, layoutName as MetricsNumbersName, layoutDescription as MetricsNumbersDesc } from "./swift/MetricsNumbers";
import SimpleBulletPointsLayout, { Schema as SimpleBulletSchema, layoutId as SimpleBulletId, layoutName as SimpleBulletName, layoutDescription as SimpleBulletDesc } from "./swift/SimpleBulletPointsLayout";
import SwiftTableOfContents, { Schema as SwiftTocSchema, layoutId as SwiftTocId, layoutName as SwiftTocName, layoutDescription as SwiftTocDesc } from "./swift/TableOfContents";
import TableorChart, { Schema as TableChartSchema, layoutId as TableChartId, layoutName as TableChartName, layoutDescription as TableChartDesc } from "./swift/TableorChart";
import Timeline, { Schema as TimelineSchema, layoutId as TimelineId, layoutName as TimelineName, layoutDescription as TimelineDesc } from "./swift/Timeline";

// neo swift templates
import TitleCenteredChartLayout, { Schema as TitleCenteredChartSchema, layoutId as TitleCenteredChartId, layoutName as TitleCenteredChartName, layoutDescription as TitleCenteredChartDesc } from './neo-swift/TitleCenteredChart';
import TitleChartMetricsSidebarLayout, { Schema as TitleChartMetricsSidebarSchema, layoutId as TitleChartMetricsSidebarId, layoutName as TitleChartMetricsSidebarName, layoutDescription as TitleChartMetricsSidebarDesc } from './neo-swift/TitleChartMetricsSidebar';
import TitleDescriptionBulletListLayout, { Schema as TitleDescriptionBulletListSchema, layoutId as TitleDescriptionBulletListId, layoutName as TitleDescriptionBulletListName, layoutDescription as TitleDescriptionBulletListDesc } from './neo-swift/TitleDescriptionBulletList';
import TitleDescriptionDataTableLayout, { Schema as TitleDescriptionDataTableSchema, layoutId as TitleDescriptionDataTableId, layoutName as TitleDescriptionDataTableName, layoutDescription as TitleDescriptionDataTableDesc } from './neo-swift/TitleDescriptionDataTable';
import TitleDescriptionImageRightSwiftLayout, { Schema as TitleDescriptionImageRightSwiftSchema, layoutId as TitleDescriptionImageRightSwiftId, layoutName as TitleDescriptionImageRightSwiftName, layoutDescription as TitleDescriptionImageRightSwiftDesc } from './neo-swift/TitleDescriptionImageRight';

import TitleDescriptionMetricsGridLayout, { Schema as TitleDescriptionMetricsGridSchema, layoutId as TitleDescriptionMetricsGridId, layoutName as TitleDescriptionMetricsGridName, layoutDescription as TitleDescriptionMetricsGridDesc } from './neo-swift/TitleDescriptionMetricsGrid';
import TitleDescriptionMetricsGridImageLayout, { Schema as TitleDescriptionMetricsGridImageSchema, layoutId as TitleDescriptionMetricsGridImageId, layoutName as TitleDescriptionMetricsGridImageName, layoutDescription as TitleDescriptionMetricsGridImageDesc } from './neo-swift/TitleDescriptionMetricsGridImage';
import TitleDualComparisionBlockLayout, { Schema as TitleDualComparisionBlockSchema, layoutId as TitleDualComparisionBlockId, layoutName as TitleDualComparisionBlockName, layoutDescription as TitleDualComparisionBlockDesc } from './neo-swift/TitleDualComparisonBlocks';
import TitleLabelDescriptionStatCardsLayout, { Schema as TitleLabelDescriptionStatCardsSchema, layoutId as TitleLabelDescriptionStatCardsId, layoutName as TitleLabelDescriptionStatCardsName, layoutDescription as TitleLabelDescriptionStatCardsDesc } from './neo-swift/TitleLabelDescriptionStatCards';
import TitleSubtitleTeamMemberCardsLayout, { Schema as TitleSubtitleTeamMemberCardsSchema, layoutId as TitleSubtitleTeamMemberCardsId, layoutName as TitleSubtitleTeamMemberCardsName, layoutDescription as TitleSubtitleTeamMemberCardsDesc } from './neo-swift/TitleSubtitleTeamMemberCards';
import TitleTaglineDescriptionNumberedStepsLayout, { Schema as TitleTaglineDescriptionNumberedStepsSchema, layoutId as TitleTaglineDescriptionNumberedStepsId, layoutName as TitleTaglineDescriptionNumberedStepsName, layoutDescription as TitleTaglineDescriptionNumberedStepsDesc } from './neo-swift/TitleTaglineDescriptionNumberedSteps';
import TitleThreeByThreeMetricsGridLayout, { Schema as TitleThreeByThreeMetricsGridSchema, layoutId as TitleThreeByThreeMetricsGridId, layoutName as TitleThreeByThreeMetricsGridName, layoutDescription as TitleThreeByThreeMetricsGridDesc } from './neo-swift/TitleThreeByThreeMetricsGrid';
import TitleDescriptionSixChartsGridLayout, { Schema as TitleDescriptionSixChartsGridSchema, layoutId as TitleDescriptionSixChartsGridId, layoutName as TitleDescriptionSixChartsGridName, layoutDescription as TitleDescriptionSixChartsGridDesc } from './neo-swift/TitleDescriptionSixChartsGrid';
import TitleDescriptionSixChartsFourMetricsLayout, { Schema as TitleDescriptionSixChartsFourMetricsSchema, layoutId as TitleDescriptionSixChartsFourMetricsId, layoutName as TitleDescriptionSixChartsFourMetricsName, layoutDescription as TitleDescriptionSixChartsFourMetricsDesc } from './neo-swift/TitleDescriptionSixChartsFourMetrics';
import TitleDescriptionFourChartsSixBulletsLayout, { Schema as TitleDescriptionFourChartsSixBulletsSchema, layoutId as TitleDescriptionFourChartsSixBulletsId, layoutName as TitleDescriptionFourChartsSixBulletsName, layoutDescription as TitleDescriptionFourChartsSixBulletsDesc } from './neo-swift/TitleDescriptionFourChartsSixBullets';






// TODO: Step 2: Import template settings Here (like the ones below)
// Template template settings
import generalSettings from "./general/settings.json";
import modernSettings from "./modern/settings.json";
import standardSettings from "./standard/settings.json";
import swiftSettings from "./swift/settings.json";
import neoGeneralSettings from "./neo-general/settings.json";
import neoStandardSettings from "./neo-standard/settings.json";
import neoBrutalistSettings from "./neo-brutalist/settings.json";
import neoBrutalistFancySettings from "./neo-brutalist-fancy/settings.json";
import softBloomSettings from "./soft-bloom/settings.json";
import calmWavesSettings from "./calm-waves/settings.json";
import salviaNatureSettings from "./salvia-nature/settings.json";
import gradientMeshSettings from "./gradient-mesh/settings.json";
import blushCompanySettings from "./blush-company/settings.json";
import velvetHazeSettings from "./velvet-haze/settings.json";
import dreamStudioSettings from "./dream-studio/settings.json";
import neoModernSettings from "./neo-modern/settings.json";
import neoSwiftSettings from "./neo-swift/settings.json";
import professionalPitchSettings from "./professional-pitch/settings.json";
import educationalScienceSettings from "./educational-science/settings.json";
import educationalSocialScienceSettings from "./educational-social-science/settings.json";
import techAIRedSettings from "./tech-ai-red/settings.json";
import darkSpaceSettings from "./dark-space/settings.json";
import minimalistMonoSettings from "./minimalist-mono/settings.json";


// Helper to create template entry


// TODO: Step 3: Create template entries for each template (like the ones below)

export const neoGeneralTemplates: TemplateWithData[] = [

    createTemplateEntry(TextSplitWithEmphasisBlockLayout, TextSplitWithEmphasisBlockSchema, TextSplitWithEmphasisBlockId, TextSplitWithEmphasisBlockName, TextSplitWithEmphasisBlockDesc, 'neo-general', 'TextSplitWithEmphasisBlock'),
    createTemplateEntry(TitleWithGridBasedHeadingAndDescriptionLayout, TitleWithGridBasedHeadingAndDescriptionSchema, TitleWithGridBasedHeadingAndDescriptionId, TitleWithGridBasedHeadingAndDescriptionName, TitleWithGridBasedHeadingAndDescriptionDesc, "neo-general", "TitleWithGridBasedHeadingAndDescriptionLayout"),


    createTemplateEntry(TitleWithFullWidthChartLayout, TitleWithFullWidthChartSchema, TitleWithFullWidthChartId, TitleWithFullWidthChartName, TitleWithFullWidthChartDesc, "neo-general", "TitleWithFullWidthChartLayout"),
    createTemplateEntry(TitleMetricsWithChartLayout, TitleMetricsWithChartSchema, TitleMetricsWithChartId, TitleMetricsWithChartName, TitleMetricsWithChartDesc, "neo-general", "TitleMetricsWithChartLayout"),

    createTemplateEntry(TitleTopDescriptionFourTeamMembersGridLayout, TitleTopDescriptionFourTeamMembersGridSchema, TitleTopDescriptionFourTeamMembersGridId, TitleTopDescriptionFourTeamMembersGridName, TitleTopDescriptionFourTeamMembersGridDesc, "neo-general", "TitleTopDescriptionFourTeamMembersGridLayout"),
    createTemplateEntry(TitleThreeColumnRiskConstraintsLayout, TitleThreeColumnRiskConstraintsSchema, TitleThreeColumnRiskConstraintsId, TitleThreeColumnRiskConstraintsName, TitleThreeColumnRiskConstraintsDesc, "neo-general", "TitleThreeColumnRiskConstraintsLayout"),
    createTemplateEntry(TitleMetricValueMetricLabelFunnelStagesLayout, TitleMetricValueMetricLabelFunnelStagesSchema, TitleMetricValueMetricLabelFunnelStagesId, TitleMetricValueMetricLabelFunnelStagesName, TitleMetricValueMetricLabelFunnelStagesDesc, "neo-general", "TitleMetricValueMetricLabelFunnelStages"),
    createTemplateEntry(ThankYouContactInfoFooterImageSlideLayout, ThankYouContactInfoFooterImageSlideSchema, ThankYouContactInfoFooterImageSlideId, ThankYouContactInfoFooterImageSlideName, ThankYouContactInfoFooterImageSlideDesc, "neo-general", "ThankYouContactInfoFooterImageSlideLayout"),
    createTemplateEntry(TimelineLayout, TimelineLayoutSchema, TimelineLayoutId, TimelineLayoutName, TimelineLayoutDesc, "neo-general", "TimelineLayoutLayout"),

    createTemplateEntry(IndexedThreeColumnListLayout, IndexedThreeColumnListSchema, IndexedThreeColumnListId, IndexedThreeColumnListName, IndexedThreeColumnListDesc, "neo-general", "IndexedThreeColumnListLayout"),
    createTemplateEntry(LayoutTextBlockWithMetricCardsLayout, LayoutTextBlockWithMetricCardsSchema, LayoutTextBlockWithMetricCardsId, LayoutTextBlockWithMetricCardsName, LayoutTextBlockWithMetricCardsDesc, "neo-general", "LayoutTextBlockWithMetricCardsLayout"),
    createTemplateEntry(LeftAlignQuotesLayout, LeftAlignQuotesSchema, LeftAlignQuotesId, LeftAlignQuotesName, LeftAlignQuotesDesc, "neo-general", "LeftAlignQuotesLayout"),
    createTemplateEntry(TitleDescriptionWithTableLayout, TitleDescriptionWithTableSchema, TitleDescriptionWithTableId, TitleDescriptionWithTableName, TitleDescriptionWithTableDesc, "neo-general", "TitleDescriptionWithTableLayout"),
    createTemplateEntry(ChallengeAndOutcomeWithOneStatLayout, ChallengeAndOutcomeWithOneStatSchema, ChallengeAndOutcomeWithOneStatId, ChallengeAndOutcomeWithOneStatName, ChallengeAndOutcomeWithOneStatDesc, "neo-general", "ChallengeAndOutcomeWithOneStatLayout"),
    createTemplateEntry(GridBasedEightMetricsSnapshotsLayout, GridBasedEightMetricsSnapshotsSchema, GridBasedEightMetricsSnapshotsId, GridBasedEightMetricsSnapshotsName, GridBasedEightMetricsSnapshotsDesc, "neo-general", "GridBasedEightMetricsSnapshotsLayout"),

    createTemplateEntry(HeadlineTextWithBulletsAndStatsLayout, HeadlineTextWithBulletsAndStatsSchema, HeadlineTextWithBulletsAndStatsId, HeadlineTextWithBulletsAndStatsName, HeadlineTextWithBulletsAndStatsDesc, "neo-general", "HeadlineTextWithBulletsAndStatsLayout"),
    createTemplateEntry(HeadlineDescriptionWithImageLayout, HeadlineDescriptionWithImageSchema, HeadlineDescriptionWithImageId, HeadlineDescriptionWithImageName, HeadlineDescriptionWithImageDesc, "neo-general", "HeadlineDescriptionWithImageLayout"),
    createTemplateEntry(HeadlineDescriptionWithDoubleImageLayout, HeadlineDescriptionWithDoubleImageSchema, HeadlineDescriptionWithDoubleImageId, HeadlineDescriptionWithDoubleImageName, HeadlineDescriptionWithDoubleImageDesc, "neo-general", "HeadlineDescriptionWithDoubleImageLayout"),


    createTemplateEntry(BulletIconsOnlySlideNeoGeneralLayout, BulletIconsOnlyNeoGeneralSchema, BulletIconsOnlyNeoGeneralId, BulletIconsOnlyNeoGeneralName, BulletIconsOnlyNeoGeneralDesc, "neo-general", "BulletIconsOnlySlideLayout"),
    createTemplateEntry(BulletWithIconsSlideNeoGeneralLayout, BulletWithIconsNeoGeneralSchema, BulletWithIconsNeoGeneralId, BulletWithIconsNeoGeneralName, BulletWithIconsNeoGeneralDesc, "neo-general", "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChartWithBulletsSlideNeoGeneralLayout, ChartWithBulletsNeoGeneralSchema, ChartWithBulletsNeoGeneralId, ChartWithBulletsNeoGeneralName, ChartWithBulletsNeoGeneralDesc, "neo-general", "ChartWithBulletsSlideLayout"),

    createTemplateEntry(MetricsWithImageSlideNeoGeneralLayout, MetricsWithImageNeoGeneralSchema, MetricsWithImageNeoGeneralId, MetricsWithImageNeoGeneralName, MetricsWithImageNeoGeneralDesc, "neo-general", "MetricsWithImageSlideLayout"),
    createTemplateEntry(NumberedBulletsSlideNeoGeneralLayout, NumberedBulletsNeoGeneralSchema, NumberedBulletsNeoGeneralId, NumberedBulletsNeoGeneralName, NumberedBulletsNeoGeneralDesc, "neo-general", "NumberedBulletsSlideLayout"),
    createTemplateEntry(QuoteSlideNeoGeneralLayout, QuoteNeoGeneralSchema, QuoteNeoGeneralId, QuoteNeoGeneralName, QuoteNeoGeneralDesc, "neo-general", "QuoteSlideLayout"),

    createTemplateEntry(TableOfContentWithoutPageNumberLayout, TableOfContentWithoutPageNumberSchema, TableOfContentWithoutPageNumberId, TableOfContentWithoutPageNumberName, TableOfContentWithoutPageNumberDesc, "neo-general", "TableOfContentWithoutPageNumber"),

    createTemplateEntry(TeamSlideNeoGeneralLayout, TeamNeoGeneralSchema, TeamNeoGeneralId, TeamNeoGeneralName, TeamNeoGeneralDesc, "neo-general", "TeamSlideLayout"),
    createTemplateEntry(MultiChartGridSlideLayout, MultiChartGridSlideSchema, MultiChartGridSlideId, MultiChartGridSlideName, MultiChartGridSlideDesc, "neo-general", "MultiChartGridSlideLayout"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetricsLayout, TitleDescriptionMultiChartGridWithMetricsSchema, TitleDescriptionMultiChartGridWithMetricsId, TitleDescriptionMultiChartGridWithMetricsName, TitleDescriptionMultiChartGridWithMetricsDesc, "neo-general", "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBulletsLayout, TitleDescriptionMultiChartGridWithBulletsSchema, TitleDescriptionMultiChartGridWithBulletsId, TitleDescriptionMultiChartGridWithBulletsName, TitleDescriptionMultiChartGridWithBulletsDesc, "neo-general", "TitleDescriptionMultiChartGridWithBullets"),
]

export const neoBrutalistTemplates: TemplateWithData[] = [
    createTemplateEntry(NeoBrutalistIntroLayout, NeoBrutalistIntroSchema, NeoBrutalistIntroId, NeoBrutalistIntroName, NeoBrutalistIntroDesc, "neo-brutalist", "NeoBrutalistIntroLayout"),
]

export const neoBrutalistFancyTemplates: TemplateWithData[] = [
    createTemplateEntry(NeoBrutalistIntroLayout, NeoBrutalistIntroSchema, NeoBrutalistIntroId, NeoBrutalistIntroName, NeoBrutalistIntroDesc, "neo-brutalist-fancy", "NeoBrutalistIntroLayout"),
    createTemplateEntry(NeoBrutalistMetricsLayout, NeoBrutalistMetricsSchema, NeoBrutalistMetricsId, NeoBrutalistMetricsName, NeoBrutalistMetricsDesc, "neo-brutalist-fancy", "NeoBrutalistMetricsLayout"),
    createTemplateEntry(NeoBrutalistGridFeaturesLayout, NeoBrutalistGridFeaturesSchema, NeoBrutalistGridFeaturesId, NeoBrutalistGridFeaturesName, NeoBrutalistGridFeaturesDesc, "neo-brutalist-fancy", "NeoBrutalistGridFeaturesLayout"),
    createTemplateEntry(NeoBrutalistTestimonialsLayout, NeoBrutalistTestimonialsSchema, NeoBrutalistTestimonialsId, NeoBrutalistTestimonialsName, NeoBrutalistTestimonialsDesc, "neo-brutalist-fancy", "NeoBrutalistTestimonialsLayout"),
]

export const softBloomTemplates: TemplateWithData[] = [
    createTemplateEntry(SoftBloomIntroLayout, SoftBloomIntroSchema, SoftBloomIntroId, SoftBloomIntroName, SoftBloomIntroDesc, "soft-bloom", "SoftBloomIntroLayout"),
    createTemplateEntry(SoftBloomFeaturesLayout, SoftBloomFeaturesSchema, SoftBloomFeaturesId, SoftBloomFeaturesName, SoftBloomFeaturesDesc, "soft-bloom", "SoftBloomFeaturesLayout"),
    createTemplateEntry(SoftBloomStatsLayout, SoftBloomStatsSchema, SoftBloomStatsId, SoftBloomStatsName, SoftBloomStatsDesc, "soft-bloom", "SoftBloomStatsLayout"),
    createTemplateEntry(SoftBloomQuoteLayout, SoftBloomQuoteSchema, SoftBloomQuoteId, SoftBloomQuoteName, SoftBloomQuoteDesc, "soft-bloom", "SoftBloomQuoteLayout"),
]

export const calmWavesTemplates: TemplateWithData[] = [
    createTemplateEntry(CalmWavesCoverLayout, CalmWavesCoverSchema, CalmWavesCoverId, CalmWavesCoverName, CalmWavesCoverDesc, "calm-waves", "CalmWavesCoverLayout"),
    createTemplateEntry(CalmWavesImageLeftLayout, CalmWavesImageLeftSchema, CalmWavesImageLeftId, CalmWavesImageLeftName, CalmWavesImageLeftDesc, "calm-waves", "CalmWavesImageLeftLayout"),
    createTemplateEntry(CalmWavesImageRightLayout, CalmWavesImageRightSchema, CalmWavesImageRightId, CalmWavesImageRightName, CalmWavesImageRightDesc, "calm-waves", "CalmWavesImageRightLayout"),
    createTemplateEntry(CalmWavesImageGridLayout, CalmWavesImageGridSchema, CalmWavesImageGridId, CalmWavesImageGridName, CalmWavesImageGridDesc, "calm-waves", "CalmWavesImageGridLayout"),
    createTemplateEntry(CalmWavesTwoImagesLayout, CalmWavesTwoImagesSchema, CalmWavesTwoImagesId, CalmWavesTwoImagesName, CalmWavesTwoImagesDesc, "calm-waves", "CalmWavesTwoImagesLayout"),
    createTemplateEntry(CalmWavesContactImageLayout, CalmWavesContactImageSchema, CalmWavesContactImageId, CalmWavesContactImageName, CalmWavesContactImageDesc, "calm-waves", "CalmWavesContactImageLayout"),
]

export const salviaNatureTemplates: TemplateWithData[] = [
    createTemplateEntry(SalviaNatureCoverLayout, SalviaNatureCoverSchema, SalviaNatureCoverId, SalviaNatureCoverName, SalviaNatureCoverDesc, "salvia-nature", "SalviaNatureCoverLayout"),
    createTemplateEntry(SalviaNatureSplitHeroLayout, SalviaNatureSplitHeroSchema, SalviaNatureSplitHeroId, SalviaNatureSplitHeroName, SalviaNatureSplitHeroDesc, "salvia-nature", "SalviaNatureSplitHeroLayout"),
    createTemplateEntry(SalviaNatureActionLayout, SalviaNatureActionSchema, SalviaNatureActionId, SalviaNatureActionName, SalviaNatureActionDesc, "salvia-nature", "SalviaNatureActionLayout"),
    createTemplateEntry(SalviaNatureImageColumnsLayout, SalviaNatureImageColumnsSchema, SalviaNatureImageColumnsId, SalviaNatureImageColumnsName, SalviaNatureImageColumnsDesc, "salvia-nature", "SalviaNatureImageColumnsLayout"),
    createTemplateEntry(SalviaNatureTwoCardsLayout, SalviaNatureTwoCardsSchema, SalviaNatureTwoCardsId, SalviaNatureTwoCardsName, SalviaNatureTwoCardsDesc, "salvia-nature", "SalviaNatureTwoCardsLayout"),
    createTemplateEntry(SalviaNatureAboutLayout, SalviaNatureAboutSchema, SalviaNatureAboutId, SalviaNatureAboutName, SalviaNatureAboutDesc, "salvia-nature", "SalviaNatureAboutLayout"),
    createTemplateEntry(SalviaNatureContactLayout, SalviaNatureContactSchema, SalviaNatureContactId, SalviaNatureContactName, SalviaNatureContactDesc, "salvia-nature", "SalviaNatureContactLayout"),
]

export const gradientMeshTemplates: TemplateWithData[] = [
    createTemplateEntry(GradientMeshCoverLayout, GradientMeshCoverSchema, GradientMeshCoverId, GradientMeshCoverName, GradientMeshCoverDesc, "gradient-mesh", "GradientMeshCoverLayout"),
    createTemplateEntry(GradientMeshSplitHeroLayout, GradientMeshSplitHeroSchema, GradientMeshSplitHeroId, GradientMeshSplitHeroName, GradientMeshSplitHeroDesc, "gradient-mesh", "GradientMeshSplitHeroLayout"),
]

export const blushCompanyTemplates: TemplateWithData[] = [
    createTemplateEntry(BlushCompanyCoverLayout, BlushCompanyCoverSchema, BlushCompanyCoverId, BlushCompanyCoverName, BlushCompanyCoverDesc, "blush-company", "BlushCompanyCoverLayout"),
    createTemplateEntry(BlushCompanyAboutStoryLayout, BlushCompanyAboutStorySchema, BlushCompanyAboutStoryId, BlushCompanyAboutStoryName, BlushCompanyAboutStoryDesc, "blush-company", "BlushCompanyAboutStoryLayout"),
    createTemplateEntry(BlushCompanyProjectLayout, BlushCompanyProjectSchema, BlushCompanyProjectId, BlushCompanyProjectName, BlushCompanyProjectDesc, "blush-company", "BlushCompanyProjectLayout"),
    createTemplateEntry(BlushCompanySocialMediaLayout, BlushCompanySocialMediaSchema, BlushCompanySocialMediaId, BlushCompanySocialMediaName, BlushCompanySocialMediaDesc, "blush-company", "BlushCompanySocialMediaLayout"),
    createTemplateEntry(BlushCompanyProcessLayout, BlushCompanyProcessSchema, BlushCompanyProcessId, BlushCompanyProcessName, BlushCompanyProcessDesc, "blush-company", "BlushCompanyProcessLayout"),
    createTemplateEntry(BlushCompanyTeamLayout, BlushCompanyTeamSchema, BlushCompanyTeamId, BlushCompanyTeamName, BlushCompanyTeamDesc, "blush-company", "BlushCompanyTeamLayout"),
    createTemplateEntry(BlushCompanyContactLayout, BlushCompanyContactSchema, BlushCompanyContactId, BlushCompanyContactName, BlushCompanyContactDesc, "blush-company", "BlushCompanyContactLayout"),
    createTemplateEntry(BlushCompanyThankYouLayout, BlushCompanyThankYouSchema, BlushCompanyThankYouId, BlushCompanyThankYouName, BlushCompanyThankYouDesc, "blush-company", "BlushCompanyThankYouLayout"),
]

export const velvetHazeTemplates: TemplateWithData[] = [
    createTemplateEntry(VelvetHazeIntroLayout, VelvetHazeIntroSchema, VelvetHazeIntroId, VelvetHazeIntroName, VelvetHazeIntroDesc, "velvet-haze", "VelvetHazeIntroLayout"),
    createTemplateEntry(VelvetHazeMetricsLayout, VelvetHazeMetricsSchema, VelvetHazeMetricsId, VelvetHazeMetricsName, VelvetHazeMetricsDesc, "velvet-haze", "VelvetHazeMetricsLayout"),
    createTemplateEntry(VelvetHazeFeaturesLayout, VelvetHazeFeaturesSchema, VelvetHazeFeaturesId, VelvetHazeFeaturesName, VelvetHazeFeaturesDesc, "velvet-haze", "VelvetHazeFeaturesLayout"),
    createTemplateEntry(VelvetHazeTestimonialsLayout, VelvetHazeTestimonialsSchema, VelvetHazeTestimonialsId, VelvetHazeTestimonialsName, VelvetHazeTestimonialsDesc, "velvet-haze", "VelvetHazeTestimonialsLayout"),
    createTemplateEntry(VelvetHazeQuoteLayout, VelvetHazeQuoteSchema, VelvetHazeQuoteId, VelvetHazeQuoteName, VelvetHazeQuoteDesc, "velvet-haze", "VelvetHazeQuoteLayout"),
    createTemplateEntry(VelvetHazeTimelineLayout, VelvetHazeTimelineSchema, VelvetHazeTimelineId, VelvetHazeTimelineName, VelvetHazeTimelineDesc, "velvet-haze", "VelvetHazeTimelineLayout"),
    createTemplateEntry(VelvetHazeComparisonLayout, VelvetHazeComparisonSchema, VelvetHazeComparisonId, VelvetHazeComparisonName, VelvetHazeComparisonDesc, "velvet-haze", "VelvetHazeComparisonLayout"),
    createTemplateEntry(VelvetHazeImageGalleryLayout, VelvetHazeImageGallerySchema, VelvetHazeImageGalleryId, VelvetHazeImageGalleryName, VelvetHazeImageGalleryDesc, "velvet-haze", "VelvetHazeImageGalleryLayout"),
]

export const dreamStudioTemplates: TemplateWithData[] = [
    createTemplateEntry(DreamStudioIntroLayout, DreamStudioIntroSchema, DreamStudioIntroId, DreamStudioIntroName, DreamStudioIntroDesc, "dream-studio", "DreamStudioIntroLayout"),
    createTemplateEntry(DreamStudioAboutLayout, DreamStudioAboutSchema, DreamStudioAboutId, DreamStudioAboutName, DreamStudioAboutDesc, "dream-studio", "DreamStudioAboutLayout"),
    createTemplateEntry(DreamStudioServicesLayout, DreamStudioServicesSchema, DreamStudioServicesId, DreamStudioServicesName, DreamStudioServicesDesc, "dream-studio", "DreamStudioServicesLayout"),
    createTemplateEntry(DreamStudioCoreValuesLayout, DreamStudioCoreValuesSchema, DreamStudioCoreValuesId, DreamStudioCoreValuesName, DreamStudioCoreValuesDesc, "dream-studio", "DreamStudioCoreValuesLayout"),
    createTemplateEntry(DreamStudioTimelineLayout, DreamStudioTimelineSchema, DreamStudioTimelineId, DreamStudioTimelineName, DreamStudioTimelineDesc, "dream-studio", "DreamStudioTimelineLayout"),
    createTemplateEntry(DreamStudioTextShowcaseLayout, DreamStudioTextShowcaseSchema, DreamStudioTextShowcaseId, DreamStudioTextShowcaseName, DreamStudioTextShowcaseDesc, "dream-studio", "DreamStudioTextShowcaseLayout"),
    createTemplateEntry(DreamStudioExperienceLayout, DreamStudioExperienceSchema, DreamStudioExperienceId, DreamStudioExperienceName, DreamStudioExperienceDesc, "dream-studio", "DreamStudioExperienceLayout"),
    createTemplateEntry(DreamStudioTestimonialsLayout, DreamStudioTestimonialsSchema, DreamStudioTestimonialsId, DreamStudioTestimonialsName, DreamStudioTestimonialsDesc, "dream-studio", "DreamStudioTestimonialsLayout"),
    createTemplateEntry(DreamStudioProcessLayout, DreamStudioProcessSchema, DreamStudioProcessId, DreamStudioProcessName, DreamStudioProcessDesc, "dream-studio", "DreamStudioProcessLayout"),
    createTemplateEntry(DreamStudioSplitContentLayout, DreamStudioSplitContentSchema, DreamStudioSplitContentId, DreamStudioSplitContentName, DreamStudioSplitContentDesc, "dream-studio", "DreamStudioSplitContentLayout"),
    createTemplateEntry(DreamStudioFeaturesGridLayout, DreamStudioFeaturesGridSchema, DreamStudioFeaturesGridId, DreamStudioFeaturesGridName, DreamStudioFeaturesGridDesc, "dream-studio", "DreamStudioFeaturesGridLayout"),
]

export const neoStandardTemplates: TemplateWithData[] = [
    createTemplateEntry(TitleBadgeChartLayout, TitleBadgeChartSchema, TitleBadgeChartId, TitleBadgeChartName, TitleBadgeChartDesc, "neo-standard", "TitleBadgeChartLayout"),
    createTemplateEntry(TitleDescriptionBulletListStandardLayout, TitleDescriptionBulletListStandardSchema, TitleDescriptionBulletListStandardId, TitleDescriptionBulletListStandardName, TitleDescriptionBulletListStandardDesc, "neo-standard", "TitleDescriptionBulletList"),
    createTemplateEntry(TitleDescriptionContactCardsLayout, TitleDescriptionContactCardsSchema, TitleDescriptionContactCardsId, TitleDescriptionContactCardsName, TitleDescriptionContactCardsDesc, "neo-standard", "TitleDescriptionContactCardsLayout"),
    createTemplateEntry(TitleDescriptionIconListLayout, TitleDescriptionIconListSchema, TitleDescriptionIconListId, TitleDescriptionIconListName, TitleDescriptionIconListDesc, "neo-standard", "TitleDescriptionIconListLayout"),
    createTemplateEntry(TitleDescriptionImageRightLayout, TitleDescriptionImageRightSchema, TitleDescriptionImageRightId, TitleDescriptionImageRightName, TitleDescriptionImageRightDesc, "neo-standard", "TitleDescriptionImageRightLayout"),
    createTemplateEntry(TitleDescriptionRadialCardsLayout, TitleDescriptionRadialCardsSchema, TitleDescriptionRadialCardsId, TitleDescriptionRadialCardsName, TitleDescriptionRadialCardsDesc, "neo-standard", "TitleDescriptionRadialCardsLayout"),
    createTemplateEntry(TitleDescriptionTableLayout, TitleDescriptionTableSchema, TitleDescriptionTableId, TitleDescriptionTableName, TitleDescriptionTableDesc, "neo-standard", "TitleDescriptionTableLayout"),
    createTemplateEntry(TitleDescriptionTimelineLayout, TitleDescriptionTimelineSchema, TitleDescriptionTimelineId, TitleDescriptionTimelineName, TitleDescriptionTimelineDesc, "neo-standard", "TitleDescriptionTimelineLayout"),
    createTemplateEntry(TitleDualChartsComparisonLayout, TitleDualChartsComparisonSchema, TitleDualChartsComparisonId, TitleDualChartsComparisonName, TitleDualChartsComparisonDesc, "neo-standard", "TitleDualChartsComparisonLayout"),
    createTemplateEntry(TitleDualComparisonCardsLayout, TitleDualComparisonCardsSchema, TitleDualComparisonCardsId, TitleDualComparisonCardsName, TitleDualComparisonCardsDesc, "neo-standard", "TitleDualComparisonCardsLayout"),
    createTemplateEntry(TitleKpiGridLayout, TitleKpiGridSchema, TitleKpiGridId, TitleKpiGridName, TitleKpiGridDesc, "neo-standard", "TitleKpiGridLayout"),
    createTemplateEntry(TitleMetricsChartLayout, TitleMetricsChartSchema, TitleMetricsChartId, TitleMetricsChartName, TitleMetricsChartDesc, "neo-standard", "TitleMetricsChartLayout"),
    createTemplateEntry(TitleMetricsImageLayout, TitleMetricsImageSchema, TitleMetricsImageId, TitleMetricsImageName, TitleMetricsImageDesc, "neo-standard", "TitleMetricsImageLayout"),
    createTemplateEntry(TitlePointsDonutGridLayout, TitlePointsDonutGridSchema, TitlePointsDonutGridId, TitlePointsDonutGridName, TitlePointsDonutGridDesc, "neo-standard", "TitlePointsDonutGridLayout"),
    createTemplateEntry(TitleDescriptionMultiChartGridStandardLayout, TitleDescriptionMultiChartGridStandardSchema, TitleDescriptionMultiChartGridStandardId, TitleDescriptionMultiChartGridStandardName, TitleDescriptionMultiChartGridStandardDesc, "neo-standard", "TitleDescriptionMultiChartGrid"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetricsStandardLayout, TitleDescriptionMultiChartGridWithMetricsStandardSchema, TitleDescriptionMultiChartGridWithMetricsStandardId, TitleDescriptionMultiChartGridWithMetricsStandardName, TitleDescriptionMultiChartGridWithMetricsStandardDesc, "neo-standard", "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBulletsStandardLayout, TitleDescriptionMultiChartGridWithBulletsStandardSchema, TitleDescriptionMultiChartGridWithBulletsStandardId, TitleDescriptionMultiChartGridWithBulletsStandardName, TitleDescriptionMultiChartGridWithBulletsStandardDesc, "neo-standard", "TitleDescriptionMultiChartGridWithBullets"),
]
export const neoModernTemplates: TemplateWithData[] = [
    createTemplateEntry(TitleDescriptionBulletListModernLayout, TitleDescriptionBulletListModernSchema, TitleDescriptionBulletListModernId, TitleDescriptionBulletListModernName, TitleDescriptionBulletListModernDesc, "neo-modern", "TitleDescriptionBulletList"),
    createTemplateEntry(TitleDescriptionContactListLayout, TitleDescriptionContactListSchema, TitleDescriptionContactListId, TitleDescriptionContactListName, TitleDescriptionContactListDesc, "neo-modern", "TitleDescriptionContactListLayout"),
    createTemplateEntry(TitleDescriptionDualMetricsGridLayout, TitleDescriptionDualMetricsGridSchema, TitleDescriptionDualMetricsGridId, TitleDescriptionDualMetricsGridName, TitleDescriptionDualMetricsGridDesc, "neo-modern", "TitleDescriptionDualMetricsGridLayout"),
    createTemplateEntry(TitleDescriptionIconTimelineLayout, TitleDescriptionIconTimelineSchema, TitleDescriptionIconTimelineId, TitleDescriptionIconTimelineName, TitleDescriptionIconTimelineDesc, "neo-modern", "TitleDescriptionIconTimelineLayout"),
    createTemplateEntry(TitleDescriptionImageRightModernLayout, TitleDescriptionImageRightModernSchema, TitleDescriptionImageRightModernId, TitleDescriptionImageRightModernName, TitleDescriptionImageRightModernDesc, "neo-modern", "TitleDescriptionImageRightModernLayout"),
    createTemplateEntry(TitleDescriptionMetricsChartLayout, TitleDescriptionMetricsChartSchema, TitleDescriptionMetricsChartId, TitleDescriptionMetricsChartName, TitleDescriptionMetricsChartDesc, "neo-modern", "TitleDescriptionMetricsChartLayout"),
    createTemplateEntry(TitleDescriptionMetricsImageLayout, TitleDescriptionMetricsImageSchema, TitleDescriptionMetricsImageId, TitleDescriptionMetricsImageName, TitleDescriptionMetricsImageDesc, "neo-modern", "TitleDescriptionMetricsImageLayout"),
    createTemplateEntry(TitleDescriptionMetricsTableLayout, TitleDescriptionMetricsTableSchema, TitleDescriptionMetricsTableId, TitleDescriptionMetricsTableName, TitleDescriptionMetricsTableDesc, "neo-modern", "TitleDescriptionMetricsTableLayout"),
    createTemplateEntry(TitleDualComparisonChartsLayout, TitleDualComparisonChartsSchema, TitleDualComparisonChartsId, TitleDualComparisonChartsName, TitleDualComparisonChartsDesc, "neo-modern", "TitleDualComparisonChartsLayout"),
    createTemplateEntry(TitleDualComparisonCardsModernLayout, TitleDualComparisonCardsModernSchema, TitleDualComparisonCardsModernId, TitleDualComparisonCardsModernName, TitleDualComparisonCardsModernDesc, "neo-modern", "TitleDualComparisonCardsModernLayout"),
    createTemplateEntry(TitleHorizontalAltenenatingTimelineLayout, TitleHorizontalAltenenatingTimelineSchema, TitleHorizontalAltenenatingTimelineId, TitleHorizontalAltenenatingTimelineName, TitleHorizontalAltenenatingTimelineDesc, "neo-modern", "TitleHorizontalAltenenatingTimelineLayout"),
    createTemplateEntry(TitleKpiSnapshotGridLayout, TitleKpiSnapshotGridSchema, TitleKpiSnapshotGridId, TitleKpiSnapshotGridName, TitleKpiSnapshotGridDesc, "neo-modern", "TitleKpiSnapshotGridLayout"),
    createTemplateEntry(TitleSubtitlesChartLayout, TitleSubtitlesChartSchema, TitleSubtitlesChartId, TitleSubtitlesChartName, TitleSubtitlesChartDesc, "neo-modern", "TitleSubtitlesChartLayout"),
    createTemplateEntry(TitleTwoColumnNumberListLayout, TitleTwoColumnNumberListSchema, TitleTwoColumnNumberListId, TitleTwoColumnNumberListName, TitleTwoColumnNumberListDesc, "neo-modern", "TitleTwoColumnNumberListLayout"),
    createTemplateEntry(TitleDescriptionMultiChartGridLayout, TitleDescriptionMultiChartGridSchema, TitleDescriptionMultiChartGridId, TitleDescriptionMultiChartGridName, TitleDescriptionMultiChartGridDesc, "neo-modern", "TitleDescriptionMultiChartGrid"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithMetricsModernLayout, TitleDescriptionMultiChartGridWithMetricsModernSchema, TitleDescriptionMultiChartGridWithMetricsModernId, TitleDescriptionMultiChartGridWithMetricsModernName, TitleDescriptionMultiChartGridWithMetricsModernDesc, "neo-modern", "TitleDescriptionMultiChartGridWithMetrics"),
    createTemplateEntry(TitleDescriptionMultiChartGridWithBulletsModernLayout, TitleDescriptionMultiChartGridWithBulletsModernSchema, TitleDescriptionMultiChartGridWithBulletsModernId, TitleDescriptionMultiChartGridWithBulletsModernName, TitleDescriptionMultiChartGridWithBulletsModernDesc, "neo-modern", "TitleDescriptionMultiChartGridWithBullets"),
]
export const neoSwiftTemplates: TemplateWithData[] = [
    createTemplateEntry(TitleCenteredChartLayout, TitleCenteredChartSchema, TitleCenteredChartId, TitleCenteredChartName, TitleCenteredChartDesc, "neo-swift", "TitleCenteredChartLayout"),
    createTemplateEntry(TitleChartMetricsSidebarLayout, TitleChartMetricsSidebarSchema, TitleChartMetricsSidebarId, TitleChartMetricsSidebarName, TitleChartMetricsSidebarDesc, "neo-swift", "TitleChartMetricsSidebarLayout"),
    createTemplateEntry(TitleDescriptionBulletListLayout, TitleDescriptionBulletListSchema, TitleDescriptionBulletListId, TitleDescriptionBulletListName, TitleDescriptionBulletListDesc, "neo-swift", "TitleDescriptionBulletListLayout"),
    createTemplateEntry(TitleDescriptionDataTableLayout, TitleDescriptionDataTableSchema, TitleDescriptionDataTableId, TitleDescriptionDataTableName, TitleDescriptionDataTableDesc, "neo-swift", "TitleDescriptionDataTableLayout"),
    createTemplateEntry(TitleDescriptionImageRightSwiftLayout, TitleDescriptionImageRightSwiftSchema, TitleDescriptionImageRightSwiftId, TitleDescriptionImageRightSwiftName, TitleDescriptionImageRightSwiftDesc, "neo-swift", "TitleDescriptionImageRightSwiftLayout"),
    createTemplateEntry(TitleDescriptionMetricsGridLayout, TitleDescriptionMetricsGridSchema, TitleDescriptionMetricsGridId, TitleDescriptionMetricsGridName, TitleDescriptionMetricsGridDesc, "neo-swift", "TitleDescriptionMetricsGridLayout"),
    createTemplateEntry(TitleDescriptionMetricsGridImageLayout, TitleDescriptionMetricsGridImageSchema, TitleDescriptionMetricsGridImageId, TitleDescriptionMetricsGridImageName, TitleDescriptionMetricsGridImageDesc, "neo-swift", "TitleDescriptionMetricsGridImageLayout"),
    createTemplateEntry(TitleDualComparisionBlockLayout, TitleDualComparisionBlockSchema, TitleDualComparisionBlockId, TitleDualComparisionBlockName, TitleDualComparisionBlockDesc, "neo-swift", "TitleDualComparisionBlockLayout"),
    createTemplateEntry(TitleLabelDescriptionStatCardsLayout, TitleLabelDescriptionStatCardsSchema, TitleLabelDescriptionStatCardsId, TitleLabelDescriptionStatCardsName, TitleLabelDescriptionStatCardsDesc, "neo-swift", "TitleLabelDescriptionStatCardsLayout"),
    createTemplateEntry(TitleSubtitleTeamMemberCardsLayout, TitleSubtitleTeamMemberCardsSchema, TitleSubtitleTeamMemberCardsId, TitleSubtitleTeamMemberCardsName, TitleSubtitleTeamMemberCardsDesc, "neo-swift", "TitleSubtitleTeamMemberCardsLayout"),
    createTemplateEntry(TitleTaglineDescriptionNumberedStepsLayout, TitleTaglineDescriptionNumberedStepsSchema, TitleTaglineDescriptionNumberedStepsId, TitleTaglineDescriptionNumberedStepsName, TitleTaglineDescriptionNumberedStepsDesc, "neo-swift", "TitleTaglineDescriptionNumberedStepsLayout"),
    createTemplateEntry(TitleThreeByThreeMetricsGridLayout, TitleThreeByThreeMetricsGridSchema, TitleThreeByThreeMetricsGridId, TitleThreeByThreeMetricsGridName, TitleThreeByThreeMetricsGridDesc, "neo-swift", "TitleThreeByThreeMetricsGridLayout"),
    createTemplateEntry(TitleDescriptionSixChartsGridLayout, TitleDescriptionSixChartsGridSchema, TitleDescriptionSixChartsGridId, TitleDescriptionSixChartsGridName, TitleDescriptionSixChartsGridDesc, "neo-swift", "TitleDescriptionSixChartsGridLayout"),
    createTemplateEntry(TitleDescriptionSixChartsFourMetricsLayout, TitleDescriptionSixChartsFourMetricsSchema, TitleDescriptionSixChartsFourMetricsId, TitleDescriptionSixChartsFourMetricsName, TitleDescriptionSixChartsFourMetricsDesc, "neo-swift", "TitleDescriptionSixChartsFourMetricsLayout"),
    createTemplateEntry(TitleDescriptionFourChartsSixBulletsLayout, TitleDescriptionFourChartsSixBulletsSchema, TitleDescriptionFourChartsSixBulletsId, TitleDescriptionFourChartsSixBulletsName, TitleDescriptionFourChartsSixBulletsDesc, "neo-swift", "TitleDescriptionFourChartsSixBulletsLayout"),
]

// General templates array
export const generalTemplates: TemplateWithData[] = [

    createTemplateEntry(GeneralIntroSlideLayout, GeneralIntroSchema, GeneralIntroId, GeneralIntroName, GeneralIntroDesc, "general", "IntroSlideLayout"),
    createTemplateEntry(BasicInfoSlideLayout, BasicInfoSchema, BasicInfoId, BasicInfoName, BasicInfoDesc, "general", "BasicInfoSlideLayout"),
    createTemplateEntry(BulletIconsOnlySlideLayout, BulletIconsOnlySchema, BulletIconsOnlyId, BulletIconsOnlyName, BulletIconsOnlyDesc, "general", "BulletIconsOnlySlideLayout"),
    createTemplateEntry(BulletWithIconsSlideLayout, BulletWithIconsSchema, BulletWithIconsId, BulletWithIconsName, BulletWithIconsDesc, "general", "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChartWithBulletsSlideLayout, ChartWithBulletsSchema, ChartWithBulletsId, ChartWithBulletsName, ChartWithBulletsDesc, "general", "ChartWithBulletsSlideLayout"),
    createTemplateEntry(MetricsSlideLayout, MetricsSchema, MetricsId, MetricsName, MetricsDesc, "general", "MetricsSlideLayout"),
    createTemplateEntry(MetricsWithImageSlideLayout, MetricsWithImageSchema, MetricsWithImageId, MetricsWithImageName, MetricsWithImageDesc, "general", "MetricsWithImageSlideLayout"),
    createTemplateEntry(NumberedBulletsSlideLayout, NumberedBulletsSchema, NumberedBulletsId, NumberedBulletsName, NumberedBulletsDesc, "general", "NumberedBulletsSlideLayout"),
    createTemplateEntry(QuoteSlideLayout, QuoteSchema, QuoteId, QuoteName, QuoteDesc, "general", "QuoteSlideLayout"),
    createTemplateEntry(TableInfoSlideLayout, TableInfoSchema, TableInfoId, TableInfoName, TableInfoDesc, "general", "TableInfoSlideLayout"),
    createTemplateEntry(TableOfContentsSlideLayout, TableOfContentsSchema, TableOfContentsId, TableOfContentsName, TableOfContentsDesc, "general", "TableOfContentsSlideLayout"),
    createTemplateEntry(TeamSlideLayout, TeamSchema, TeamId, TeamName, TeamDesc, "general", "TeamSlideLayout"),
];


// Modern templates array
export const modernTemplates: TemplateWithData[] = [
    createTemplateEntry(ModernIntroSlideLayout, ModernIntroSchema, ModernIntroId, ModernIntroName, ModernIntroDesc, "modern", "IntroSlideLayout"),
    createTemplateEntry(BulletsWithIconsDescriptionGrid, BulletsIconsGridSchema, BulletsIconsGridId, BulletsIconsGridName, BulletsIconsGridDesc, "modern", "BulletsWithIconsDescriptionGrid"),
    createTemplateEntry(ModernBulletWithIconsSlideLayout, ModernBulletIconsSchema, ModernBulletIconsId, ModernBulletIconsName, ModernBulletIconsDesc, "modern", "BulletWithIconsSlideLayout"),
    createTemplateEntry(ChartOrTableWithDescription, ChartTableDescSchema, ChartTableDescId, ChartTableDescName, ChartTableDescDesc, "modern", "ChartOrTableWithDescription"),
    createTemplateEntry(ChartOrTableWithMetricsDescription, ChartMetricsSchema, ChartMetricsId, ChartMetricsName, ChartMetricsDesc, "modern", "ChartOrTableWithMetricsDescription"),
    createTemplateEntry(ImageAndDescriptionLayout, ImageDescSchema, ImageDescId, ImageDescName, ImageDescDesc, "modern", "ImageAndDescriptionLayout"),
    createTemplateEntry(ImageListWithDescriptionSlideLayout, ImageListDescSchema, ImageListDescId, ImageListDescName, ImageListDescDesc, "modern", "ImageListWithDescriptionSlideLayout"),
    createTemplateEntry(ImagesWithDescriptionLayout, ImagesDescSchema, ImagesDescId, ImagesDescName, ImagesDescDesc, "modern", "ImagesWithDescriptionLayout"),
    createTemplateEntry(MetricsWithDescription, MetricsDescSchema, MetricsDescId, MetricsDescName, MetricsDescDesc, "modern", "MetricsWithDescription"),
    createTemplateEntry(ModernTableOfContentsLayout, ModernTocSchema, ModernTocId, ModernTocName, ModernTocDesc, "modern", "TableOfContentsLayout"),
];

// Standard templates array
export const standardTemplates: TemplateWithData[] = [
    createTemplateEntry(StandardIntroSlideLayout, StandardIntroSchema, StandardIntroId, StandardIntroName, StandardIntroDesc, "standard", "IntroSlideLayout"),
    createTemplateEntry(ChartLeftTextRightLayout, ChartLeftSchema, ChartLeftId, ChartLeftName, ChartLeftDesc, "standard", "ChartLeftTextRightLayout"),
    createTemplateEntry(ContactLayout, ContactSchema, ContactId, ContactName, ContactDesc, "standard", "ContactLayout"),
    createTemplateEntry(HeadingBulletImageDescriptionLayout, HeadingBulletSchema, HeadingBulletId, HeadingBulletName, HeadingBulletDesc, "standard", "HeadingBulletImageDescriptionLayout"),
    createTemplateEntry(IconBulletDescriptionLayout, IconBulletSchema, IconBulletId, IconBulletName, IconBulletDesc, "standard", "IconBulletDescriptionLayout"),
    createTemplateEntry(IconImageDescriptionLayout, IconImageSchema, IconImageId, IconImageName, IconImageDesc, "standard", "IconImageDescriptionLayout"),
    createTemplateEntry(StandardImageListWithDescriptionLayout, StdImageListSchema, StdImageListId, StdImageListName, StdImageListDesc, "standard", "ImageListWithDescriptionLayout"),
    createTemplateEntry(MetricsDescriptionLayout, MetricsDescLayoutSchema, MetricsDescLayoutId, MetricsDescLayoutName, MetricsDescLayoutDesc, "standard", "MetricsDescriptionLayout"),
    createTemplateEntry(NumberedBulletSingleImageLayout, NumBulletImgSchema, NumBulletImgId, NumBulletImgName, NumBulletImgDesc, "standard", "NumberedBulletSingleImageLayout"),
    createTemplateEntry(StandardTableOfContentsLayout, StdTocSchema, StdTocId, StdTocName, StdTocDesc, "standard", "TableOfContentsLayout"),
    createTemplateEntry(VisualMetricsSlideLayout, VisualMetricsSchema, VisualMetricsId, VisualMetricsName, VisualMetricsDesc, "standard", "VisualMetricsSlideLayout"),
];

// Swift templates array
export const swiftTemplates: TemplateWithData[] = [
    createTemplateEntry(SwiftIntroSlideLayout, SwiftIntroSchema, SwiftIntroId, SwiftIntroName, SwiftIntroDesc, "swift", "IntroSlideLayout"),
    createTemplateEntry(BulletsWithIconsTitleDescription, BulletsIconsTitleSchema, BulletsIconsTitleId, BulletsIconsTitleName, BulletsIconsTitleDesc, "swift", "BulletsWithIconsTitleDescription"),
    createTemplateEntry(IconBulletListDescription, IconBulletListSchema, IconBulletListId, IconBulletListName, IconBulletListDesc, "swift", "IconBulletListDescription"),
    createTemplateEntry(ImageListDescription, ImageListSchema, ImageListId, ImageListName, ImageListDesc, "swift", "ImageListDescription"),
    createTemplateEntry(MetricsNumbers, MetricsNumbersSchema, MetricsNumbersId, MetricsNumbersName, MetricsNumbersDesc, "swift", "MetricsNumbers"),
    createTemplateEntry(SimpleBulletPointsLayout, SimpleBulletSchema, SimpleBulletId, SimpleBulletName, SimpleBulletDesc, "swift", "SimpleBulletPointsLayout"),
    createTemplateEntry(SwiftTableOfContents, SwiftTocSchema, SwiftTocId, SwiftTocName, SwiftTocDesc, "swift", "TableOfContents"),
    createTemplateEntry(TableorChart, TableChartSchema, TableChartId, TableChartName, TableChartDesc, "swift", "TableorChart"),
    createTemplateEntry(Timeline, TimelineSchema, TimelineId, TimelineName, TimelineDesc, "swift", "Timeline"),
];

export const professionalPitchTemplates: TemplateWithData[] = [
    createTemplateEntry(PitchIntroLayout, PitchIntroSchema, PitchIntroId, PitchIntroName, PitchIntroDesc, "professional-pitch", "PitchIntroLayout"),
    createTemplateEntry(PitchAgendaLayout, PitchAgendaSchema, PitchAgendaId, PitchAgendaName, PitchAgendaDesc, "professional-pitch", "PitchAgendaLayout"),
    createTemplateEntry(PitchProblemSolutionLayout, PitchProblemSolutionSchema, PitchProblemSolutionId, PitchProblemSolutionName, PitchProblemSolutionDesc, "professional-pitch", "PitchProblemSolutionLayout"),
    createTemplateEntry(PitchMarketOpportunityLayout, PitchMarketOpportunitySchema, PitchMarketOpportunityId, PitchMarketOpportunityName, PitchMarketOpportunityDesc, "professional-pitch", "PitchMarketOpportunityLayout"),
    createTemplateEntry(PitchBusinessModelLayout, PitchBusinessModelSchema, PitchBusinessModelId, PitchBusinessModelName, PitchBusinessModelDesc, "professional-pitch", "PitchBusinessModelLayout"),
    createTemplateEntry(PitchTractionMetricsLayout, PitchTractionMetricsSchema, PitchTractionMetricsId, PitchTractionMetricsName, PitchTractionMetricsDesc, "professional-pitch", "PitchTractionMetricsLayout"),
    createTemplateEntry(PitchFinancialOverviewLayout, PitchFinancialOverviewSchema, PitchFinancialOverviewId, PitchFinancialOverviewName, PitchFinancialOverviewDesc, "professional-pitch", "PitchFinancialOverviewLayout"),
    createTemplateEntry(PitchGoToMarketLayout, PitchGoToMarketSchema, PitchGoToMarketId, PitchGoToMarketName, PitchGoToMarketDesc, "professional-pitch", "PitchGoToMarketLayout"),
    createTemplateEntry(PitchCompetitiveLandscapeLayout, PitchCompetitiveLandscapeSchema, PitchCompetitiveLandscapeId, PitchCompetitiveLandscapeName, PitchCompetitiveLandscapeDesc, "professional-pitch", "PitchCompetitiveLandscapeLayout"),
    createTemplateEntry(PitchTeamLayout, PitchTeamSchema, PitchTeamId, PitchTeamName, PitchTeamDesc, "professional-pitch", "PitchTeamLayout"),
    createTemplateEntry(PitchProductSnapshotLayout, PitchProductSnapshotSchema, PitchProductSnapshotId, PitchProductSnapshotName, PitchProductSnapshotDesc, "professional-pitch", "PitchProductSnapshotLayout"),
    createTemplateEntry(PitchClosingLayout, PitchClosingSchema, PitchClosingId, PitchClosingName, PitchClosingDesc, "professional-pitch", "PitchClosingLayout"),
];

export const educationalScienceTemplates: TemplateWithData[] = [
    createTemplateEntry(EduScienceIntroLayout, EduScienceIntroSchema, EduScienceIntroId, EduScienceIntroName, EduScienceIntroDesc, "educational-science", "EduScienceIntroLayout"),
    createTemplateEntry(EduScienceConceptLayout, EduScienceConceptSchema, EduScienceConceptId, EduScienceConceptName, EduScienceConceptDesc, "educational-science", "EduScienceConceptLayout"),
    createTemplateEntry(EduScienceTimelineLayout, EduScienceTimelineSchema, EduScienceTimelineId, EduScienceTimelineName, EduScienceTimelineDesc, "educational-science", "EduScienceTimelineLayout"),
    createTemplateEntry(EduScienceExperimentLayout, EduScienceExperimentSchema, EduScienceExperimentId, EduScienceExperimentName, EduScienceExperimentDesc, "educational-science", "EduScienceExperimentLayout"),
    createTemplateEntry(EduScienceDataInsightsLayout, EduScienceDataInsightsSchema, EduScienceDataInsightsId, EduScienceDataInsightsName, EduScienceDataInsightsDesc, "educational-science", "EduScienceDataInsightsLayout"),
    createTemplateEntry(EduScienceComparisonLayout, EduScienceComparisonSchema, EduScienceComparisonId, EduScienceComparisonName, EduScienceComparisonDesc, "educational-science", "EduScienceComparisonLayout"),
    createTemplateEntry(EduScienceImageExplainerLayout, EduScienceImageExplainerSchema, EduScienceImageExplainerId, EduScienceImageExplainerName, EduScienceImageExplainerDesc, "educational-science", "EduScienceImageExplainerLayout"),
    createTemplateEntry(EduScienceFAQLayout, EduScienceFAQSchema, EduScienceFAQId, EduScienceFAQName, EduScienceFAQDesc, "educational-science", "EduScienceFAQLayout"),
    createTemplateEntry(EduScienceGlossaryLayout, EduScienceGlossarySchema, EduScienceGlossaryId, EduScienceGlossaryName, EduScienceGlossaryDesc, "educational-science", "EduScienceGlossaryLayout"),
    createTemplateEntry(EduScienceSummaryLayout, EduScienceSummarySchema, EduScienceSummaryId, EduScienceSummaryName, EduScienceSummaryDesc, "educational-science", "EduScienceSummaryLayout"),
];

export const educationalSocialScienceTemplates: TemplateWithData[] = [
    createTemplateEntry(SocialScienceIntroLayout, SocialScienceIntroSchema, SocialScienceIntroId, SocialScienceIntroName, SocialScienceIntroDesc, "educational-social-science", "SocialScienceIntroLayout"),
    createTemplateEntry(SocialScienceConceptLayout, SocialScienceConceptSchema, SocialScienceConceptId, SocialScienceConceptName, SocialScienceConceptDesc, "educational-social-science", "SocialScienceConceptLayout"),
    createTemplateEntry(SocialScienceTimelineLayout, SocialScienceTimelineSchema, SocialScienceTimelineId, SocialScienceTimelineName, SocialScienceTimelineDesc, "educational-social-science", "SocialScienceTimelineLayout"),
    createTemplateEntry(SocialScienceCaseStudyLayout, SocialScienceCaseStudySchema, SocialScienceCaseStudyId, SocialScienceCaseStudyName, SocialScienceCaseStudyDesc, "educational-social-science", "SocialScienceCaseStudyLayout"),
    createTemplateEntry(SocialScienceDataInsightsLayout, SocialScienceDataInsightsSchema, SocialScienceDataInsightsId, SocialScienceDataInsightsName, SocialScienceDataInsightsDesc, "educational-social-science", "SocialScienceDataInsightsLayout"),
    createTemplateEntry(SocialScienceComparisonLayout, SocialScienceComparisonSchema, SocialScienceComparisonId, SocialScienceComparisonName, SocialScienceComparisonDesc, "educational-social-science", "SocialScienceComparisonLayout"),
    createTemplateEntry(SocialScienceImageExplainerLayout, SocialScienceImageExplainerSchema, SocialScienceImageExplainerId, SocialScienceImageExplainerName, SocialScienceImageExplainerDesc, "educational-social-science", "SocialScienceImageExplainerLayout"),
    createTemplateEntry(SocialScienceFAQLayout, SocialScienceFAQSchema, SocialScienceFAQId, SocialScienceFAQName, SocialScienceFAQDesc, "educational-social-science", "SocialScienceFAQLayout"),
    createTemplateEntry(SocialScienceGlossaryLayout, SocialScienceGlossarySchema, SocialScienceGlossaryId, SocialScienceGlossaryName, SocialScienceGlossaryDesc, "educational-social-science", "SocialScienceGlossaryLayout"),
    createTemplateEntry(SocialScienceSummaryLayout, SocialScienceSummarySchema, SocialScienceSummaryId, SocialScienceSummaryName, SocialScienceSummaryDesc, "educational-social-science", "SocialScienceSummaryLayout"),
];

export const techAIRedTemplates: TemplateWithData[] = [
    createTemplateEntry(TechAIIntroLayout, TechAIIntroSchema, TechAIIntroId, TechAIIntroName, TechAIIntroDesc, "tech-ai-red", "TechAIIntroLayout"),
    createTemplateEntry(TechAIPipelineLayout, TechAIPipelineSchema, TechAIPipelineId, TechAIPipelineName, TechAIPipelineDesc, "tech-ai-red", "TechAIPipelineLayout"),
    createTemplateEntry(TechAIArchitectureLayout, TechAIArchitectureSchema, TechAIArchitectureId, TechAIArchitectureName, TechAIArchitectureDesc, "tech-ai-red", "TechAIArchitectureLayout"),
    createTemplateEntry(TechAIMetricsLayout, TechAIMetricsSchema, TechAIMetricsId, TechAIMetricsName, TechAIMetricsDesc, "tech-ai-red", "TechAIMetricsLayout"),
    createTemplateEntry(TechAIModelComparisonLayout, TechAIModelComparisonSchema, TechAIModelComparisonId, TechAIModelComparisonName, TechAIModelComparisonDesc, "tech-ai-red", "TechAIModelComparisonLayout"),
    createTemplateEntry(TechAIUseCasesLayout, TechAIUseCasesSchema, TechAIUseCasesId, TechAIUseCasesName, TechAIUseCasesDesc, "tech-ai-red", "TechAIUseCasesLayout"),
    createTemplateEntry(TechAIRiskGovernanceLayout, TechAIRiskGovernanceSchema, TechAIRiskGovernanceId, TechAIRiskGovernanceName, TechAIRiskGovernanceDesc, "tech-ai-red", "TechAIRiskGovernanceLayout"),
    createTemplateEntry(TechAIRoadmapLayout, TechAIRoadmapSchema, TechAIRoadmapId, TechAIRoadmapName, TechAIRoadmapDesc, "tech-ai-red", "TechAIRoadmapLayout"),
    createTemplateEntry(TechAITeamLayout, TechAITeamSchema, TechAITeamId, TechAITeamName, TechAITeamDesc, "tech-ai-red", "TechAITeamLayout"),
    createTemplateEntry(TechAIClosingLayout, TechAIClosingSchema, TechAIClosingId, TechAIClosingName, TechAIClosingDesc, "tech-ai-red", "TechAIClosingLayout"),
];

export const darkSpaceTemplates: TemplateWithData[] = [
    createTemplateEntry(DarkSpaceIntroLayout, DarkSpaceIntroSchema, DarkSpaceIntroId, DarkSpaceIntroName, DarkSpaceIntroDesc, "dark-space", "DarkSpaceIntroLayout"),
    createTemplateEntry(DarkSpaceAgendaLayout, DarkSpaceAgendaSchema, DarkSpaceAgendaId, DarkSpaceAgendaName, DarkSpaceAgendaDesc, "dark-space", "DarkSpaceAgendaLayout"),
    createTemplateEntry(DarkSpaceConceptLayout, DarkSpaceConceptSchema, DarkSpaceConceptId, DarkSpaceConceptName, DarkSpaceConceptDesc, "dark-space", "DarkSpaceConceptLayout"),
    createTemplateEntry(DarkSpaceArchitectureLayout, DarkSpaceArchitectureSchema, DarkSpaceArchitectureId, DarkSpaceArchitectureName, DarkSpaceArchitectureDesc, "dark-space", "DarkSpaceArchitectureLayout"),
    createTemplateEntry(DarkSpaceMetricsLayout, DarkSpaceMetricsSchema, DarkSpaceMetricsId, DarkSpaceMetricsName, DarkSpaceMetricsDesc, "dark-space", "DarkSpaceMetricsLayout"),
    createTemplateEntry(DarkSpaceTimelineLayout, DarkSpaceTimelineSchema, DarkSpaceTimelineId, DarkSpaceTimelineName, DarkSpaceTimelineDesc, "dark-space", "DarkSpaceTimelineLayout"),
    createTemplateEntry(DarkSpaceComparisonLayout, DarkSpaceComparisonSchema, DarkSpaceComparisonId, DarkSpaceComparisonName, DarkSpaceComparisonDesc, "dark-space", "DarkSpaceComparisonLayout"),
    createTemplateEntry(DarkSpaceUseCasesLayout, DarkSpaceUseCasesSchema, DarkSpaceUseCasesId, DarkSpaceUseCasesName, DarkSpaceUseCasesDesc, "dark-space", "DarkSpaceUseCasesLayout"),
    createTemplateEntry(DarkSpaceTeamLayout, DarkSpaceTeamSchema, DarkSpaceTeamId, DarkSpaceTeamName, DarkSpaceTeamDesc, "dark-space", "DarkSpaceTeamLayout"),
    createTemplateEntry(DarkSpaceClosingLayout, DarkSpaceClosingSchema, DarkSpaceClosingId, DarkSpaceClosingName, DarkSpaceClosingDesc, "dark-space", "DarkSpaceClosingLayout"),
];

export const minimalistMonoTemplates: TemplateWithData[] = [
    createTemplateEntry(MonoIntroLayout, MonoIntroSchema, MonoIntroId, MonoIntroName, MonoIntroDesc, "minimalist-mono", "MonoIntroLayout"),
    createTemplateEntry(MonoAgendaLayout, MonoAgendaSchema, MonoAgendaId, MonoAgendaName, MonoAgendaDesc, "minimalist-mono", "MonoAgendaLayout"),
    createTemplateEntry(MonoConceptLayout, MonoConceptSchema, MonoConceptId, MonoConceptName, MonoConceptDesc, "minimalist-mono", "MonoConceptLayout"),
    createTemplateEntry(MonoMetricsLayout, MonoMetricsSchema, MonoMetricsId, MonoMetricsName, MonoMetricsDesc, "minimalist-mono", "MonoMetricsLayout"),
    createTemplateEntry(MonoComparisonLayout, MonoComparisonSchema, MonoComparisonId, MonoComparisonName, MonoComparisonDesc, "minimalist-mono", "MonoComparisonLayout"),
    createTemplateEntry(MonoTimelineLayout, MonoTimelineSchema, MonoTimelineId, MonoTimelineName, MonoTimelineDesc, "minimalist-mono", "MonoTimelineLayout"),
    createTemplateEntry(MonoUseCasesLayout, MonoUseCasesSchema, MonoUseCasesId, MonoUseCasesName, MonoUseCasesDesc, "minimalist-mono", "MonoUseCasesLayout"),
    createTemplateEntry(MonoTeamLayout, MonoTeamSchema, MonoTeamId, MonoTeamName, MonoTeamDesc, "minimalist-mono", "MonoTeamLayout"),
    createTemplateEntry(MonoClosingLayout, MonoClosingSchema, MonoClosingId, MonoClosingName, MonoClosingDesc, "minimalist-mono", "MonoClosingLayout"),
];

// TODO: Step 4: Combine all templates into a single array For UseCases (like the ones below)
// All templates combined
export const allLayouts: TemplateWithData[] = [
    ...neoBrutalistTemplates,
    ...neoBrutalistFancyTemplates,
    ...neoGeneralTemplates,
    ...neoModernTemplates,
    ...neoStandardTemplates,
    ...neoSwiftTemplates,
    ...generalTemplates,
    ...modernTemplates,
    ...standardTemplates,
    ...swiftTemplates,
    ...softBloomTemplates,
    ...calmWavesTemplates,
    ...salviaNatureTemplates,
    ...gradientMeshTemplates,
    ...blushCompanyTemplates,
    ...velvetHazeTemplates,
    ...dreamStudioTemplates,
    ...professionalPitchTemplates,
    ...educationalScienceTemplates,
    ...educationalSocialScienceTemplates,
    ...techAIRedTemplates,
    ...darkSpaceTemplates,
    ...minimalistMonoTemplates,


];


// TODO: Step 5: Combine all templates into a single array For UseCases (like the ones below)
// For UseCases we need to combine all templates into a single array with settings
export const templates: TemplateLayoutsWithSettings[] = [
    {
        id: "neo-brutalist",
        name: "Neo Brutalist",
        description: neoBrutalistSettings.description,
        settings: neoBrutalistSettings as TemplateGroupSettings,
        layouts: neoBrutalistTemplates,
    },
    {
        id: "neo-brutalist-fancy",
        name: "Neo Brutalist Fancy",
        description: neoBrutalistFancySettings.description,
        settings: neoBrutalistFancySettings as TemplateGroupSettings,
        layouts: neoBrutalistFancyTemplates,
    },
    {
        id: "soft-bloom",
        name: "Soft Bloom",
        description: softBloomSettings.description,
        settings: softBloomSettings as TemplateGroupSettings,
        layouts: softBloomTemplates,
    },
    {
        id: "calm-waves",
        name: "Calm Waves",
        description: calmWavesSettings.description,
        settings: calmWavesSettings as TemplateGroupSettings,
        layouts: calmWavesTemplates,
    },
    {
        id: "salvia-nature",
        name: "Salvia Nature",
        description: salviaNatureSettings.description,
        settings: salviaNatureSettings as TemplateGroupSettings,
        layouts: salviaNatureTemplates,
    },
    {
        id: "gradient-mesh",
        name: "Gradient Mesh",
        description: gradientMeshSettings.description,
        settings: gradientMeshSettings as TemplateGroupSettings,
        layouts: gradientMeshTemplates,
    },
    {
        id: "blush-company",
        name: "Blush Company",
        description: blushCompanySettings.description,
        settings: blushCompanySettings as TemplateGroupSettings,
        layouts: blushCompanyTemplates,
    },
    {
        id: "velvet-haze",
        name: "Velvet Haze",
        description: velvetHazeSettings.description,
        settings: velvetHazeSettings as TemplateGroupSettings,
        layouts: velvetHazeTemplates,
    },
    {
        id: "dream-studio",
        name: "Dream Studio",
        description: dreamStudioSettings.description,
        settings: dreamStudioSettings as TemplateGroupSettings,
        layouts: dreamStudioTemplates,
    },
    {
        id: "neo-general",
        name: "Neo General",
        description: neoGeneralSettings.description,
        settings: neoGeneralSettings as TemplateGroupSettings,
        layouts: neoGeneralTemplates,
    },
    {
        id: "neo-standard",
        name: "Neo Standard",
        description: neoStandardSettings.description,
        settings: neoStandardSettings as TemplateGroupSettings,
        layouts: neoStandardTemplates,
    },
    {
        id: "neo-modern",
        name: "Neo Modern",
        description: neoModernSettings.description,
        settings: neoModernSettings as TemplateGroupSettings,
        layouts: neoModernTemplates,
    },
    {
        id: "neo-swift",
        name: "Neo Swift",
        description: neoSwiftSettings.description,
        settings: neoSwiftSettings as TemplateGroupSettings,
        layouts: neoSwiftTemplates,
    },
    {
        id: "general",
        name: "General",
        description: generalSettings.description,
        settings: generalSettings as TemplateGroupSettings,
        layouts: generalTemplates,
    },
    {
        id: "modern",
        name: "Modern",
        description: modernSettings.description,
        settings: modernSettings as TemplateGroupSettings,
        layouts: modernTemplates,
    },
    {
        id: "standard",
        name: "Standard",
        description: standardSettings.description,
        settings: standardSettings as TemplateGroupSettings,
        layouts: standardTemplates,
    },
    {
        id: "swift",
        name: "Swift",
        description: swiftSettings.description,
        settings: swiftSettings as TemplateGroupSettings,
        layouts: swiftTemplates,
    },
    {
        id: "professional-pitch",
        name: "Professional Pitch",
        description: professionalPitchSettings.description,
        settings: professionalPitchSettings as TemplateGroupSettings,
        layouts: professionalPitchTemplates,
    },
    {
        id: "educational-science",
        name: "Educational Science",
        description: educationalScienceSettings.description,
        settings: educationalScienceSettings as TemplateGroupSettings,
        layouts: educationalScienceTemplates,
    },
    {
        id: "educational-social-science",
        name: "Educational Social Science",
        description: educationalSocialScienceSettings.description,
        settings: educationalSocialScienceSettings as TemplateGroupSettings,
        layouts: educationalSocialScienceTemplates,
    },
    {
        id: "tech-ai-red",
        name: "Tech AI Red",
        description: techAIRedSettings.description,
        settings: techAIRedSettings as TemplateGroupSettings,
        layouts: techAIRedTemplates,
    },
    {
        id: "dark-space",
        name: "Dark Space",
        description: darkSpaceSettings.description,
        settings: darkSpaceSettings as TemplateGroupSettings,
        layouts: darkSpaceTemplates,
    },
    {
        id: "minimalist-mono",
        name: "Minimalist Mono",
        description: minimalistMonoSettings.description,
        settings: minimalistMonoSettings as TemplateGroupSettings,
        layouts: minimalistMonoTemplates,
    },

];

// Helper to get templates by group ID
export function getTemplatesByTemplateName(templateId: string): TemplateWithData[] {
    const template = templates.find((t) => t.id === templateId);
    return template?.layouts || [];
}

export function getSchemaByTemplateId(templateId: string): any {
    const template = templates.find((t) => t.id === templateId);
    return template?.layouts.map(t => {
        return {
            id: t.layoutId,
            name: t.layoutName,
            description: t.layoutDescription,
            json_schema: t.schemaJSON,
        }
    }) || {};
}
export function getSettingsByTemplateId(templateId: string): TemplateGroupSettings | undefined {
    const template = templates.find((t) => t.id === templateId);
    return template?.settings || undefined;
}
// Helper to get template by layout ID
export function getTemplateByLayoutId(layoutId: string): TemplateWithData | undefined {
    return allLayouts.find((t) => t.layoutId === layoutId);
}
export function getLayoutByLayoutId(layout: string): TemplateWithData | undefined {
    const templateName = layout.split(':')[0]


    const template = templates.find((t) => t.id === templateName)
    if (template) {
        return template.layouts.find((t) => t.layoutId === layout);
    }
    return undefined;
}