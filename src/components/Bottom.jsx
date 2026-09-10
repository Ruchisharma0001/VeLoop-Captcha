import { Home, CheckSquare, Gem, Wallet, User} from "lucide-react";
function Bottom() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: CheckSquare, label: "Tasks" },
    { icon: Gem, label: "Rewards" },
    { icon: Wallet, label: "Wallet" },
    { icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#080819]/90 px-3 py-3 backdrop-blur-2xl md:hidden">

      <div className="mx-auto flex max-w-lg items-center justify-around">

        {items.map(({ icon: Icon, label }, index) => (
          <button
            key={label}
            className={`
              flex flex-col items-center gap-1
              text-[10px]
              ${
                index === 1
                  ? "text-cyan-400"
                  : "text-white/40"
              }
            `}
          >
            <Icon size={19} />
            {label}
          </button>
        ))}

      </div>

    </nav>
  );
}

export default Bottom;