function CheckmarkText({ Text }) {
    return (
        <div
            className="flex justify-center items-center space-x-1 
        transition-all text-xl
        hover:text-yellow-200"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                />
            </svg>
            <p
                className="border-2 border-yellow-900 font-bold 
            rounded-xl px-3 py-1 hover:shadow-xl"
            >
                {Text}
            </p>
        </div>
    );
}

export default CheckmarkText;
