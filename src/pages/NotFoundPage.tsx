import { NavLink } from "react-router-dom";


export function ErrorSection5() {

    const getNavLinkClass = (isActive: boolean) => {
        return isActive
            ? "text-[#0f1720] bg-white px-3 py-2 text-sm font-medium relative after:bg-white rounded-lg"
            : "text-white hover:text-gray-500 px-3 py-2 text-sm font-medium relative transition-all duration-300";
    };

    return (
        <section>
            <div className="relative min-h-screen w-full bg-[url('https://www.material-tailwind.com/logos/pattern-lines.png')] bg-cover bg-no-repeat">
                <div className="grid min-h-screen px-8">
                    <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
                        <img
                            src="https://www.material-tailwind.com/logos/exclamation.png"
                            height={60}
                            width={60}
                            alt="material-logo"
                        />

                        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                            Error 404
                        </h1>

                        <br />

                        <h2 className="scroll-m-20 border-b pb-2 text-3xl tracking-tight first:mt-0">
                            Sorry, We Misplaced That Page
                        </h2>

                        <br />
                        <br />

                        <h4 className="scroll-m-20 text-l tracking-tight">
                            Our digital librarian seems to have misplaced the page you
                            requested. Stay with us, and we'll help you rediscover it.
                            <br /> <br />
                            Here, instead, you'll find some useful links:
                        </h4>

                        <div className="flex items-center gap-x-10 bg-[#0f1720] mt-10 rounded-lg">
                            <NavLink to="/" className={({ isActive }) => getNavLinkClass(isActive)}>
                                Home
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ErrorSection5;