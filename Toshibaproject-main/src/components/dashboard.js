import Logo from "./NavBar/Logo";
import Search from "./NavBar/Search";
import NavBar from "./NavBar/Sidebarbody";
import Cards from "./Body/Cards";
import Customers from "./Body/Customers";
import Growth from "./Body/Growth";
import Chats from "./Body/Chats";
import Topstates from "./Body/Topstates";
import Newdeals from "./Body/Newdeals";
const Dashboard = () => {
    return (
        <div className="w-full relative rounded-[32px] bg-off-white overflow-hidden flex flex-row items-start justify-start pt-4 px-4 pb-0 box-border gap-[16px] tracking-[normal] text-left text-sm text-black font-inter mq925:pl-4 mq925:pr-4 mq925:box-border">
            <div className="h-[890px] w-[280px] rounded-2xl bg-white flex flex-col items-start justify-start min-w-[280px] max-w-[320px] mq925:hidden">
                <div className="self-stretch h-[68px] flex flex-col items-start justify-center pt-4 px-6 pb-3 box-border relative gap-[8px] text-[21.9px] font-archivo">
                    <Logo />
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start p-2 gap-[8px]">
                    <Search />
                    <NavBar />
                </div>
            </div>
            <main className="h-[907px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[calc(100%_-_296px)] mq925:h-auto mq925:max-w-full">
                <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full shrink-0 text-left text-xl text-black font-inter">
                    <Cards/>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq925:flex-wrap">
                        <Customers/>
                        <Growth/>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                        <Chats/>
                        <Topstates/>
                        <Newdeals/>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
