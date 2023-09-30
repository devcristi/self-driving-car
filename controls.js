class Controls
{
    constructor()
    {
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;

        this.#addKeyboardListeners();
    }

    #addKeyboardListeners()
    {
        document.onkeydown=(event) =>
        {
            switch(event.key)
            {
                case "w":
                    this.forward=true;
                    break;
                case "s":
                    this.reverse=true;
                    break;
                case "a":
                    this.left=true;
                    break;
                case "d":
                    this.right=true;
                    break;
            }
            console.table(this);
        }

        document.onkeyup=(event) =>
        {
            switch(event.key)
            {
                case "w":
                    this.forward=false;
                    break;
                case "s":
                    this.reverse=false;
                    break;
                case "a":
                    this.left=false;
                    break;
                case "d":
                    this.right=false;
                    break;
            }
            console.table(this);

        }
    }
}