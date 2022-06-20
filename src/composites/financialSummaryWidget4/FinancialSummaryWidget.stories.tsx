import { ComponentStory, ComponentMeta } from "@storybook/react";
import FinancialSummaryWidget4 from "./FinancialSummaryWidget4";

export default {
  title: "composites/FinancialSummaryWidget4",
  component: FinancialSummaryWidget4,
} as ComponentMeta<typeof FinancialSummaryWidget4>;
const Template: ComponentStory<typeof FinancialSummaryWidget4> = (args) => (
  <FinancialSummaryWidget4 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Rate of Return(trailing 12 months)",
  text: "$4.48%",
};
