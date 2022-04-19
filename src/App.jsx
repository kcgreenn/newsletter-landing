function App() {
   return (
      <div className="min-h-screen flex flex-col text-white">
         <main className="container mx-auto px-6 pt-16 flex-1 text-center">
            <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
               Welcome To
            </h2>
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black mb-8 uppercase">
               The Coding Club
            </h1>

            <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
               243 members
            </div>

            <form
               action="https://www.getrevue.co/profile/kcgreenn/add_subscriber"
               method="post"
               id="revue-form"
               name="revue-form"
               target="_blank"
            >
               <div className="revue-form-group flex flex-col md:flex-row justify-center mb-4">
                  <input
                     className="revue-form-field md:text-2xl text-lg placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none"
                     placeholder="example@email.com"
                     type="email"
                     name="member[email]"
                     id="member_email"
                  />
                  <input
                     type="submit"
                     value="Join Today"
                     name="member[subscribe]"
                     id="member_submit"
                     className="bg-orange-500 rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer opacity-75 hover:opacity-50 duration-150"
                  />
               </div>
               <div className="revue-form-footer opacity-75 italic">
                  By subscribing, you agree with Revue’s{' '}
                  <a
                     className="hover:opacity-80 duration-150"
                     target="_blank"
                     href="https://www.getrevue.co/terms"
                  >
                     Terms of Service
                  </a>{' '}
                  and{' '}
                  <a
                     className="hover:opacity-80 duration-150"
                     target="_blank"
                     href="https://www.getrevue.co/privacy"
                  >
                     Privacy Policy
                  </a>
                  .
               </div>
            </form>
         </main>
         <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
            <p>Built by Kyle Green</p>
            <div className="flex -mx-6">
               <a href="#" className="mx-3 hover:opacity-80 duration-150">
                  About Us
               </a>
               <a href="#" className="mx-3 hover:opacity-80 duration-150">
                  Privacy
               </a>
               <a href="#" className="mx-3 hover:opacity-80 duration-150">
                  Contact
               </a>
            </div>
         </footer>
      </div>
   );
}

export default App;
