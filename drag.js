const canvas = document.getElementById('greenCanvas');
      const ctx = canvas.getContext('2d');

      let isDragging = false;
      let dragStartX, dragStartY;

      let rectangles = [
        { x: 700, y: 50, width: 50, height: 50, color: 'blue' },
        { x: 600, y: 50, width: 50, height: 50, color: 'red' },
        { x: 500, y: 50, width: 50, height: 50, color: 'yellow' }
      ];
      let currentRectIndex = null;

      function isOverlapping(rect1, rect2) {
        return !(rect1.x + rect1.width < rect2.x || 
             rect1.x > rect2.x + rect2.width || 
             rect1.y + rect1.height < rect2.y || 
             rect1.y > rect2.y + rect2.height);
      }

      canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        rectangles.forEach((rect, index) => {
          if (x > rect.x && x < rect.x + rect.width && y > rect.y && y < rect.y + rect.height) {
        isDragging = true;
        dragStartX = x - rect.x;
        dragStartY = y - rect.y;
        currentRectIndex = index;
          }
        });
      });

      canvas.addEventListener('mousemove', (e) => {
        if (isDragging && currentRectIndex !== null) {
          const rect = canvas.getBoundingClientRect();
          const buffer = 5; // Buffer for the border
          let newX = Math.max(buffer, Math.min(e.clientX - rect.left - dragStartX, canvas.width - rectangles[currentRectIndex].width - buffer));
          let newY = Math.max(buffer, Math.min(e.clientY - rect.top - dragStartY, canvas.height - rectangles[currentRectIndex].height - buffer));

          let tempRect = { ...rectangles[currentRectIndex], x: newX, y: newY };
          let overlapping = rectangles.some((rect, index) => index !== currentRectIndex && isOverlapping(tempRect, rect));

          if (!overlapping) {
        rectangles[currentRectIndex].x = newX;
        rectangles[currentRectIndex].y = newY;
        draw();
          }
        }
      });

      canvas.addEventListener('mouseup', () => {
        isDragging = false;
        currentRectIndex = null;
      });

      canvas.addEventListener('mouseout', () => {
        isDragging = false;
        currentRectIndex = null;
      });

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rectangles.forEach(rect => {
          ctx.fillStyle = rect.color;
          ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        });
      }

      draw();