const Button = () => {
    return (
        <div class="relative">
  <button class="relative font-bold text-white bg-gray-900 px-8 py-4 rounded-lg overflow-hidden">
    <span class="absolute top-1/2 left-1/2 h-[30px] w-[30px] bg-blue-600 rounded-full transition-transform duration-600 ease-out -translate-x-[3.3em] -translate-y-[4em]"></span>
    <span class="absolute top-1/2 left-1/2 h-[30px] w-[30px] bg-blue-600 rounded-full transition-transform duration-600 ease-out -translate-x-[6em] translate-y-[1.3em]"></span>
    <span class="absolute top-1/2 left-1/2 h-[30px] w-[30px] bg-blue-600 rounded-full transition-transform duration-600 ease-out -translate-x-[0.2em] translate-y-[1.8em]"></span>
    <span class="absolute top-1/2 left-1/2 h-[30px] w-[30px] bg-blue-600 rounded-full transition-transform duration-600 ease-out translate-x-[3.5em] translate-y-[1.4em]"></span>
    <span class="absolute top-1/2 left-1/2 h-[30px] w-[30px] bg-blue-600 rounded-full transition-transform duration-600 ease-out translate-x-[3.5em] -translate-y-[3.8em]"></span>
    <span class="relative">Click Me</span>
  </button>
</div>

    )
}
export default Button;