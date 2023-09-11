var canvas = document.getElementById('signatureCanvas');
        var context = canvas.getContext('2d');

        context.strokeStyle = '#000'; // Stroke color
        context.lineWidth = 2;      // Line width
        context.lineJoin = 'round';  // Line style


        var thinkness=document.getElementById('thinkness');

        thinkness.addEventListener('input',()=>{
          context.lineWidth=thinkness.value;
        })

        var colorPicker=document.getElementById('colorPicker');
        
        colorPicker.addEventListener('input',()=>{
          context.strokeStyle=colorPicker.value;
        })

        // Variables to track mouse movement
        var drawing = false;
        var lastX = 0;
        var lastY = 0;

        // Event listeners to track mouse movement and drawing
        canvas.addEventListener('mousedown', (e) => {
            drawing = true;
            lastX = e.clientX - canvas.getBoundingClientRect().left;
            lastY = e.clientY - canvas.getBoundingClientRect().top;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!drawing) return;

            var x = e.clientX - canvas.getBoundingClientRect().left;
            var y = e.clientY - canvas.getBoundingClientRect().top;

          
            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(x, y);
            context.closePath();
            context.stroke();

            lastX = x;
            lastY = y;
        });

        canvas.addEventListener('mouseup', () => {
            drawing = false;
        });

        canvas.addEventListener('mouseleave', () => {
            drawing = false;
        });

        // Clear the canvas
        document.getElementById('clearButton').addEventListener('click', () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
        });

        // Save the signature as an image
        document.getElementById('saveButton').addEventListener('click', () => {
            var image = canvas.toDataURL("image/png");
            // You can now send 'image' to your server or use it as needed.
            // Example: sendImageToServer(image);
        });

