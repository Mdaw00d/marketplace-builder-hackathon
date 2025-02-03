import Link from "next/link";
import Sidebar from "./sidebar";
import Search from "./components/search";

function Header() {
  return (
    <>
      <main>
        {/* Nav1 Starts*/}
        <div className="bg-gray-100 p-2 flex justify-around">
          <div className="md:mr-96">
            <p>Welcome to AuraLine</p>
          </div>
          <div className="md:ml-48 gap-5 md:gap-12 flex">
            <div className="flex gap-x-1">
              <img
                className="w-6 h-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAzZJREFUSEu1lV+IVHUUxz/nzq4uO/O7u2zkX0yKQgW1LUFESyofolLZepj9zbpJ5IoR+ZIPYU8+5YsKohCSEbjp/KkeRJJe0qIUxGAl1KzQMC3UdTXnXte0ufc0965JrjNzl8Lzes89n/M753vOEe6zyX2OTzKgNPwQQSWHyIvA47cTGgDdT6UpT2/r+UZJ1gd8POTSPK4fZXmDAAqUSGdeZ5kM1/KrDdinrVz3jwCzgZsIO6gEW1nRfiYOsvuPR2hKvY2yGhgHcoRr6adZI3+NhtQGFMq7QF4FzgHPY80PNV+xx59LSr9AmQy6BeuuSwaU/DmE+j1QQZ355NIDlPxJKDsJdUEcwOEQQh9ZM0jRW4zyNXALdR4ml/7935B7X1DwtgFvAduxZm0cPNQBYNKo7M7hhJ1k265Q8HYDPYi+S7e7MQnwM/AoIbPpMSfIl/sR6QX2VvuxfuRn3Vyt+wvADqx5g6L3LMoB4BusWZwEuBk37lQmxQYJKXi/AVO4xURWmkt3mpxKnQZ+xZrplK51EDpDwBWseSAJcBVox7lhyE7wKXiRzqdSSU27o/loNsLgbLUP5+k209g7aLjRUgauYk1HY0C+/B0i80BnYN2fKPgfgb4Wl8jRdwidFgjfA2jw5ENspo+CNwu4CHoU685PesEHQB+wFmu2U/IeJOA4woS7mhxl36ydvOIOUfTXoboJeB9r3mwM2OM9h8OXwDGseSJ2zl+fggQ7QRaghAjfEsoaejIX2aAOM/1T1fF7DNVF5NzDjQGqQtH7BWQ6aBfWjdRT34p+L6r9wI9YMzN50CKPopdFKQIXCHUOPe7lmoTS8FTC4HgsCg2Xkmv7fGyAyKvgHQSeiac0lVlCVoK7ft6v4yn7UTmeBNmHzdRcivW36cgEnwA6YrV0p1cjEm1POKhNXPQ/qfapK56FIOhkRXsk73us8T3Ilxci8hXQDLqLiWYVg4MthK150KXAMI4sIps5Vq9JyQcnX34ZkU/jFRcdGRUX4al4jau8RC4TKa6uJQNimfpLEP0MaLsd6QI4y7Hpow0VBmM4mf9EGJnWIuifaKpr9Fr+7yVKSjHh+9hK9D8gfwMfHiMoK9L0EAAAAABJRU5ErkJggg=="
                alt="Location Icon"
              />
              <p className="hidden md:block">Deliver to 423651</p>
            </div>
            <div className="flex gap-x-1">
              <img
                className="w-6 h-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZ5JREFUSEvdlT0vBEEcxn+zSLgzKoRCROUlwhcQIRqJQoGz3iqJUJH4AqInovAFyN26iEqiUVAoNUSQSIhG0JnlJLhh5bjb3K3D2Uhst7vP/H/zPDPzH4HPj/C5Pv8JEFG9CGaB+i/Gto0p27NpkxFZ6hBoyDbA9d+UWSNOBehvFXfEvgOSM4qBCHMcHGNGxFMnmpuDNMtiGrN4/vcA7xFF7A6E3gIUj0YtI8HLd0huDlLXwFJrQA+aCANy8PcBy3eVFMRPgcCrmxb6S3YdSG4OvLfdPqZs9hPwsYX9cvAngNtzENWJWBd4ypsj/3kamPrkhHvpDjFlo3sNwnYnht58K2ZQTkjeEFVlxLn2BGTWHbzqZzDluhvgvFnqBigFxil6CBMrHAaWgCtMGXEBstQO0JpBd4Ip6zKfZOfrqr2B1l3pHYA1+mVfEmAPgV5J02kmGZCL3oCw3YSho4BtUiTOMIw2QoELV0FLTaD1KEI4WR8hxAqh4DxCuLpy5n4eua/CeK4hjkHgYY/uMvXtVp4YkPXC+Gnh9F6UayWP8S8DY4oZRVw1ewAAAABJRU5ErkJggg=="
                alt="Track Order Icon"
              />
              <p className="hidden md:block">Track your order</p>
            </div>
            <div className="flex gap-x-1">
              <img
                className="w-6 h-6"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAnxJREFUSEu1lUloE2EUx39vUrrYTLqggguKnjwoFm/WWxXFKgUvybSK9CAoShWlKEUKRRQVl4JWby4INosHwQ0RPIiIgherHnoRsYKoqG2TuLQ280TSlGydxBYyl2He977v9+b/vUUo8SMlPp/igGC0EUPCoCFETyYDUulCZReiWwn4nhUKsjCgRw1WxF8Bq1KHjKbeNan3Gwa9DfSI7QbJBwR/LoREO0g5IktB2wvKqHIV9CPoOHiu01r9KdM/HxCKnwY9PLu7kVNY3q4igNglYO/sAPRhmR3ugIhWYcfvABvSTnoe9ZzDsI+g7E/ZE8BjYGNOII/weVtolrEpe1qicHQdKv3AkqxNxt9a/PWjRGLzsPmayqJDtHp7CceOoXRnQ+Q9hr0dv++5Y08DQrEoYOZJo7qbOWNBflfuAC6D3MXytnBzpI4yz2uUxdPI+RnLXJANCMf6UPYV0X6IionVbKsbIRS9D9Ls4n8Ry0zKmf6DyGg9tmcItNpl0wQYjVjVLwnGOxE94+IXxbCX4a/5kQNIavxuWpkmq3dS90h0LbY8BTwugBi2LqfN9y33DtzTU/QhAd9mbg/XMlb2FlhUUErhAgHzQC5gGKjN36gfqEg0JHUPx++hugXRs9ieXoxEJyoH8xOD77Sac3Mu2SVNhW4C5vEs3adS90ZsPuV8yUtTEm1YNS+yAc6XU2jqRElT9iZ9ALIpQ/c9VP3p51flToS+DN8ChTblFSplq3AgJW92M233yDVUnfr5z3adKf7kwBkAVqbMzsAxMmplgEHvmpkNnNycC8bXI3oL0SuUJ04kl8c9R5OFZ9CE33xSqCaKz+QizanYcskB/wBB3uUZ6ZbiFQAAAABJRU5ErkJggg=="
                alt="Offers Icon"
              />
              <p className="hidden md:block">All Offers</p>
            </div>
          </div>
        </div>
        {/* Nav1 Ends */}

        {/* Nav2 Starts*/}
        <nav className="bg-white mt-4">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            {/* Left section: Logo and Menu */}
            <div className="flex items-center space-x-5">
              <Sidebar />
            </div>
            {/* Logo */}
            <Link href="/home" passHref>
              <div>
                <div className="bg-slate-100 p-2 w-[200px] -ml-32 rounded-md border border-slate-100">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAGlJREFUSEtjZKAxYKSx+QyjFhAM4QEIoqKP/wk6C5+CPn4UR2P6gOYWUOR8TM0DEAc09wGpcYAWqejuozySSbaA5kE09C3AF8mMjLYMvXxHSPEkaZFMFQtIcR4RaodjTibC26QoGfpBBAACMxQZnsYpsQAAAABJRU5ErkJggg=="
                    alt="Logo"
                  />
                </div>
                <div className="text-black text-3xl -ml-20 font-bold -mt-[42px] ">
                  AuraLine
                </div>
              </div>
            </Link>

            <Search />

            {/* Right section: Account and Cart */}
            <div className="flex items-center space-x-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAkZJREFUSEu1lb9PE2EYx7/Pte3hrhIa/EE0ujDo6OQfYACtxNEqfd+KxtnE2CY4GdnA2OjgLErfOxRGNTTgj9HVzTiwaEQxGkjtXbDQPuYqJKVee/VIb32e5/t5fr5H6PJHXdZHR4CM7Zxnxh0AA9sJLUPDbTVqvgxKMBAgrfI4QJN+Qsycs2Q83w7SFpCxymcYVATjG4jHozEsemJbmxgG0xQI/cw8aMn461aQtgBhOUsEDILookobc40i0nZTYH4GYEEJ81wogLScNQC9v2PGvvkUlRtFLj8p9dWikR8AVpQw+8MCVgEc1Laq+2fG+n62AKwqYfaHBXg9HyJQqiCMed8WsYpKGslQgKYh56jKS0xaBBoPAXQXwKE9DdnLStruzTD7YpGmDKvMlLOk8SD0mu4EykLpOEUiWWaMeFtKhDdcrRZUphfinvctSCDI3vIOrk6v9W7qepeA0wBOettUJPYdwAcA7/UNt/7o2oFffjBfgFBOkghT3hCDMty2r2jgsRkRf9Xs/w9A1jojqOHFtuPzGjChVyrLT68l1huDvQoruj6gMSZAGKnbiJMqHS82+u0CpK31hIbYh7+Z05QSxq1OKsjY7j1mzgL4yrxx0pJ9pZ243QAh2x1EfJ9AbwvCOB0Wr/syk7Ddxfq7BbquhPHQH2CV5wh0Ieh4/MDSLp8F0wLAT5WIj/oCMrbziYGj0Uol0dzzoGouzTrHozV8IeBzQZjHfAHSctgzKGEG/oh8q/CJDyUUVk3LLfqfwE59u17BHwD0FeMZgtQSlAAAAABJRU5ErkJggg=="
                alt="Account Icon"
              />

              <Link href="/cart" passHref>
                <div className="group relative">
                  <img className="h-6 w-6" src="/cart.png" alt="" />
                  <button
                    aria-label="Cart"
                    className="text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:scale-110"
                  ></button>
                  <div className="absolute top-10 right-0 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View Cart
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <br />
      </main>
    </>
  );
}

export default Header;
