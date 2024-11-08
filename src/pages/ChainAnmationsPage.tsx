import BasePageLayout from "../layouts/BasePageLayout";
import ChainSwipeAnimation from "../components/animation/chain/ChainSwipeAnimation";
import ChainTypingAnimation from "../components/animation/chain/ChainTypingAnimation";

export default function ChainAnmationsPage() {
  return (
    <BasePageLayout title="Chain animations">
      <ChainSwipeAnimation />
      <ChainTypingAnimation />
    </BasePageLayout>
  );
}
