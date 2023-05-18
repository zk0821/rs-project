import LiveFeed from "../components/live_feed/LiveFeed";
import Layout from "../components/layout/Layout";

export default function liveFeedPage() {
    return (
        <Layout title="STM Activity Tracker: Live Feed">
            <LiveFeed />
        </Layout>
    );
}
