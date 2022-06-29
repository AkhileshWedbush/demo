// import LandingPageLayout from '../../components/layouts/landingPage/LandingPageLayout'
// import ArticleLayout from '../../components/layouts/article/ArticleLayout'
// import AsideLayout from '../../components/layouts/aside/AsideLayout'
// import AsideContent from './asideContent/AsideContent'
import { LandingPageLayout } from './styles'

// import { MainContentWrapper } from '../../components/layouts/landingPage/styles'
// import ArticleContent from './articleContent/ArticleContent'
// import { SummaryWidgetPanel } from './headerContent/styles'
// import FinancialSummaryWidget from '../../widgets/financialSummaryWidget/FinancialSummaryWidget'
// import { GainLossDataPanel } from '../../widgets/financialSummaryWidget/gainLossDataPanel/GainLossDataPanel'
// import { HouseholdDataPanel } from '../../widgets/financialSummaryWidget/householdDataPanel/HouseholdDataPanel'
// import { ProjectedIncomeDataPanel } from '../../widgets/financialSummaryWidget/projectedIncomeDataPanel/ProjectedIncomeDataPanel'
// import { RateOfReturnDataPanel } from '../../widgets/financialSummaryWidget/rateOfReturnDataPanel/RateOfReturnDataPanel'
// import { ClientGreetingsPanel, StyledItemGroup } from './styles'

function PageContent() {
  return (
    <LandingPageLayout>
      {/* <ClientGreetingsPanel>
        <h2>Good Morning! Heather Johnson</h2>
        <StyledItemGroup>
          <h3>Your Household Summary</h3>
          <p>As of 3/23/2022 12:49 PM ET</p>
        </StyledItemGroup>
      </ClientGreetingsPanel>
      <SummaryWidgetPanel>
        {/* <FinancialSummaryWidget title="Total Household Value">
          <HouseholdDataPanel totalValue="$1,232.232.23" />
        </FinancialSummaryWidget>
        <FinancialSummaryWidget title="Today's Gain/Loss">
          <GainLossDataPanel
            gainLoss="$1,232.232.23"
            gainLossPct="3.25%"
            isLoss={false}
          />
        </FinancialSummaryWidget>
        <FinancialSummaryWidget title="Rate of Return (Trailing 12 months">
          <RateOfReturnDataPanel returnRate="33.25%" isLoss={false} />
        </FinancialSummaryWidget>
        <FinancialSummaryWidget title="Projected Income Over Next 12 Mos">
          <ProjectedIncomeDataPanel totalValue="$284,232.23" />
        </FinancialSummaryWidget> */}
      {/* </SummaryWidgetPanel>
      <MainContentWrapper> */}
        {/* <ArticleLayout> */}
          {/* <ArticleContent /> */}
        {/* </ArticleLayout>
        <AsideLayout> */}
          {/* <AsideContent /> */}
        {/* </AsideLayout> */}
      {/* </MainContentWrapper> */} 
    </LandingPageLayout>
  )
}

const LandingPage = () => {
  return <PageContent />
}

export default LandingPage
