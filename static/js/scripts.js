function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    enableSmoothScrolling();
});



document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    successMessage.style.display = "block";
                    form.reset();
                } else {
                    console.error("Error:", data.error_message);
                }
            })
            .catch((error) => {
                console.error("Fetch Error:", error);
            });
    });
});


const myImage = new Image();
myImage.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjc4ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDMyOSI+PHBhdGggZD0iTTc2LjUwMSAyMDMuMzUxYy05Ljc1LTcuNjctMjAuMTUzLTE1LjAyLTI3LjI2LTI1LjM3N2MtMTQuOTYxLTE4LjI2NC0yNi40NzctMzkuNDA1LTM0LjM1LTYxLjYyNWMtNC43Ni0xNC40NS02LjM5LTI5Ljk0MS0xMi41My00My44M2MtNi40MTQtMTAuMDkxIDEuMTA1LTIxLjExNCAxMi4xNTctMjQuMzJjNC45MTctLjk0OCAxMy41NjgtNS41OSAzLjEyNS0yLjI2OGMtOS4zNjQgNi44NjYtMTAuMjY2LTYuMjQtLjY2Ni03LjA3YzYuNTUyLS44NjkgOC45NjQtNi4yMyA2LjcyMS0xMS4wNTZjLTcuMDM2LTQuNTkgMTcuMDU1LTkuNjI2IDQuOTMyLTE2LjQ3M2MtMTIuNjItMTMuNjIgMTcuNjYtMTYuMjQyIDEwLjE4OC0uNzcxYy0xLjc4NiAxMS44OTUgMjEuMTY2LTIuMTg1IDE1LjgzNiAxMS41NTRjNS40MTUgNi41OTkgMjAuMjcyIDEuNTA1IDE5Ljg5OSAxMC43NTdjNy44ODYuNTQyIDEwLjU5MyA3LjE3MyAxNy45ODggNy42ODNjNy42NzcgMy40NjYgMjEuNTggNi4xOTIgMjQuMTg4IDE0LjgzN2MtNy42MSA2LjAyMy0yNS4yMjctMTIuNDQzLTI2LjA3OCA0LjIzMmMyLjMwMiAyNC42MzggMS43MTUgNTAuMDE3IDEwLjcyNiA3My40NzhjNC4yNjIgMTQuMjA0IDE0LjYgMjUuMzg1IDIzLjkzMSAzNi40NWM4LjkzMyAxMC44MzQgMjEuMDMgMTguNDY2IDMzLjM2MyAyNC44ODdjMTAuODE1IDUuMSAyMi40NzUgOC40OCAzNC4yNjUgMTAuNjA2YzQuNzgtMy42NTYgMTMuMjIxLTE3LjI1IDIwLjY3NS0xMS41MjJjLjM2IDYuNDQ5LTE0Ljc5NiAxMy40NzEtLjcxMSAxMi43NThjOC4yNzgtMi40OTggMTQuMDEzIDYuMzk0IDIwLjgyNi0xLjYyOWM2LjI3OCA3LjQzNiAyNi4wOS00Ljc0NyAyMS42MjUgMTAuNDVjLTYuMDQyIDMuODk4LTE0Ljg1IDEuNTQzLTIwLjg5OCA2LjkwNmMtOS45NzItNC45ODMtMTcuOTEyIDQuNDUzLTI4Ljk1NiAzLjI2M2MtMTIuMjYgMi4xOTYtMjQuNzM4IDMuMDgtMzcuMTY3IDMuMDk4Yy0yMC4zOTYtMS42MDktNDEuMjIyLTIuMjg4LTYwLjYyNC05LjM5Yy0xMC45MzMtMy4xNzYtMjEuNTk4LTkuNDAyLTMxLjIwNS0xNS42MjhabTE3LjIyNCA3LjQ2OGMxMC42NzIgNC42MSAyMS4xMDkgOS40NzUgMzIuODA3IDEwLjk0NmMxOC41NTggMi41NzcgMzcuNzIzIDYuNTUyIDU2LjM0NiAyLjkzYy04LjQyOC0zLjgwNS0xNy4xNDUgMS40NzgtMjUuNTQxLTIuNzJjLTEwLjA3IDIuMTY0LTIwLjg3OC0uNTU2LTMxLjEyLTEuODk3Yy0xMS42NC01LjE4NC0yNC4yMDYtOC43NDgtMzUuMTA3LTE1LjQ4NWMtMTMuNjI4LTQuOTc1IDcuMDQzIDYuMzgzIDEwLjcyNCA3LjMwNmM4LjUxNCA0LjgzLTkuMzY1LTIuNDgtMTEuODktNC40ODdjLTcuMTMyLTQuMDAyLTguMDQtMy4xNjUtLjcwNC44OTZjMS40NzcuODY0IDIuOTM2IDEuNzczIDQuNDg1IDIuNTExWm0tMjAuMzEtMTQuMzUzYzEwLjM0NSAzLjgzMi0uMDQ2LTcuMjcyLTQuNzgtNi42M2MtMi4xLTMuNjQzLTguMDIzLTUuOTQ1LTMuODQ1LTcuOWMtNy41MTMgMi42MS03Ljg3My05LjkyLTExLjQwMy04LjEyN2MtNy45NTItMi41MTEtMy4wOTQtMTEuNDA1LTEyLjU2OS0xNi44N2MtLjg2NC01Ljc1Ni05LjQxLTEwLjc0NS0xMi4xMy0xOS40MjNjLTEuMjAzLTQuNDQ2LTkuNjU4LTE3LjIwMy00LjQ2Ni01LjMzYzQuNDIgMTEuNDMgMTIuMTk1IDIxLjIyNyAxOC42NjkgMzEuMDAzYzUuMDIyIDkuMzEgMTAuOTYgMTkuMDQ4IDIwLjEwOCAyNC44NTVjMy4wODcgMi45NjIgNi4wNjEgNy40OTMgMTAuNDE1IDguNDIyWm0tMjkuNzkxLTMyLjcxNWMuMzU4LTEuNTYzIDEuODkgMy4zOCAwIDBabTQyLjE4MyAzNy4zMDVjMi4yODgtMS4wMjYtMy4yOTYtMS4yOTQgMCAwWm01LjYxIDIuMDQ4Yy0uNTgxLTIuODI2LTIuNTYzIDEuNTgyIDAgMFptNy4wMyAyLjkzYzMuMzQxLTMuMTg3LTUuMTYtMi4wMSAwIDBabTEyLjA0NSA2LjcxM2MyLjAzMy0zLjAwMS02LjUwNy0xLjEzIDAgMFptLTIzLjEyOC0xNi4xMjNjNS4xOS0zLjM2Mi02LjcxNi0uMDQ3IDAgMFptNS4yNyAyLjYyOGMtLjE1MS0xLjc3My0xLjg3Ny43OTcgMCAwWm0yNi4zNDUgMTYuNDQ1YzQuMjM3IDIuNjc1IDI0LjczOCA1Ljg1OSAxMS45MDIgMS4wOThjLTIuMTUzLjQ1Mi0yMy44MDMtNi4xMjctMTEuOTAyLTEuMDk4Wk03Ny4xNTYgMTgzLjEyYy0uNDEyLTEuNzc3LTYuNTgtMS45NjggMCAwWm0xMi4yNiA3LjE1NWMzLjE5Ny0yLjIzLTYuNjI0LTEuNzIgMCAwWm0xMC4zMTggNi4zMjNjNC41ODQtMS43MjYtNy40MjctMS43MzMgMCAwWk03Mi4xNiAxNzcuNjg2YzQuOTcgMy44MTEgMjAuMDUuNDkgNy42MTEtMi4yNzVjLTUuNjU2LTMuMDE1LTE4LjQwNy01LjA4LTkuNzE1IDEuODE4bDIuMTA0LjQ1N1ptMzQuNTY2IDIxLjA5NWMyLjA3Mi0zLjUyNS04LjY4NS0yLjAxNSAwIDBabS0xMC41MDMtOC4zNDVjMTIuMTUgMy40MzQtMTAuMjItNy42OS0zLTEuMjY4bDEuNjAzLjcyNmwxLjM5Ny41NDJabTIxLjA1OCAxMi4xN2MxMS41MDguMTEtMTAuMzk4LTEuNTg4IDAgMFptLTQ5LjU0Ny0zMS41NzhjLS40NTItMi4xNDQtMi44MzguMTc4IDAgMFptNjkuMDEzIDQyLjQ5OGMuMzA3LTMuODctMy43NTQgMi44ODQgMCAwWm0tNDkuMzctMzAuNDcyYy0uNy0yLjA0LTMuNTk2LS4wODUgMCAwWm0tMTguNTUyLTEzLjM3MmM2LjYwNi0uMzk4LTkuMDUtMi45MSAwIDBabS0yMS45NzgtMTQuMjA0Yy0uODIzLTMuMTctNy4xODYtNS42OTQgMCAwWm01Ny42OTUgMzYuNjE0Yy0xLjIxLTEuMzgxLS41Ny4zIDAgMFptMzUuOTA1IDIyLjAzN2MtLjExLTIuMTEzLTEuOTU1Ljc5NiAwIDBabS0zOS4wODMtMjUuMzJjLjY0OC0yLjcyLTUuNjM2LS44MjUgMCAwWm0tMjYuNzUyLTE2Ljk1NmM0LjkxOC0uNTI0LTcuODgtMy4zMjIgMCAwWm00NS4yNTIgMjguMTE5YzcuNjYzLTMuMDM1LTcuNDY4LTEuNDc5IDAgMFptLTIzLjUzNS0xNS45NzVjOC44MjcgMS4xMzYtMTAuNTA4LTYuMDEtMS45NDItLjY0MmwxLjk0Mi42NDJabTMwLjY4IDE4Ljg2NGM4LjI0Ny00LjkyMyA1LjUyNyAxMS41NDIgMTMuOTg5IDEuMzkzYzguMzQzLTYuMDk0LTcuMjA3IDcuNTMzIDMuMDczIDEuMDg2YzcuNDQxLTQuOTc3IDE4LjQyNiAyLjM2IDI1LjM2NSA0Ljc0N2M0Ljk4OC0uMjQyIDkuODQxIDQuMzE2IDE0Ljk2IDEuNTQyYzkuODQ4LTIuNjU1LTE5LjI2My0zLjkzNS0xMS42MzMtOC42MzhjLTkuMDEgMi42MjQtMTUuNjY2LTMuMTI1LTIwLjEtOC44OTljLTEwLjExLTIuMzM1LTIxLjc5NS03LjUtMjYuODQzLTE2LjQ1MmMtMi4wNi0zLjM1NCAyLjk3LjQ3OC0xLjc3OC01LjAxNWMtNi4wODgtNS40MTUtOS4xMjgtMTEuNTY5LTEzLjIxNi0xOC4xNTNjLTQuODg1LTIuNjAzLTUuNDYtMTAuMjczLTUuOTUxLS4yNTRjLjA0LTYuMzI0LTUuODk4LTEwLjU4MS03LjM1LTguODE1Yy0uMDI2LTYuMDg5IDYuMzU3LTMuMDM1IDEuODktNy41NGMtLjk2LTYuMzExLTQuMTI2LTEyLjg4OC01LjA3NS0yMC4wMTZjLTEuNDc2LTMuNDMzLS4yMS0xMC43ODktNS4wNDctMy4wMTVjLTEuNzYgOC4yMi0uNTgyLTEwLjA5NiAyLjE1OC00LjA2YzMuNTk2LTYuMTYtMS4yOTYtNS40MzUtMS40OTItNC41ODRjMi4zNDItNS4xOTggMS40ODUtMTIuNTc1LS42MTQtOS43NjNjMS4yNDktNS41MTMgMS45NzUtMjAuMjg0LTEuODYzLTE3LjY2MmMyLjMyNy01Ljc2NyA0LjQxNC0yNi4zOC01LjY5Ny0xOC41MThjLTQuMDkzLjA1OC0xMS4xODcgMS40ODUtMTQuNTM1IDMuMTUyYzEwLjUwOCA1Ljc5NC0xLjA2IDIuMDkyLTUuMzQzIDEuMTdjLS41NTYgNS4zNjItNC43OTMgMy4wNDctMTAuMDkgMy4wOTljOC40NjIgMS4wNDYtNC4xMiA4LjY1LTguOTY0IDUuNjk2Yy02LjMwNCAzLjAwOCA1LjQzNCAxMC41MjguMTI0IDEyLjg1NWMuNjU1IDMuNDk5LTkuNjUyLTEuMjY3LTguODQ3IDYuODI4Yy02LjExNS0yLjU3OC0uODM3IDkuNTk5IDIuMjIzIDUuNDhjMTAuNDA0IDIuODE4IDcuMzI0IDkuMjMzIDcuNTg1IDE1LjMzM2MtMS42OTQgMy41NS04LjM3LTguMzUtMS40ODUtNy44Yy01LjQzNC04LjgyMy02LjAwOC0zLjE5Mi0xMC41MjEuOTA4Yy0xLjA0Ni4yOTUgMTEuNTA5IDUuODMyIDMuNjMgOC41NjZjNi45MzEgMS4wNzMgNy4xMzQgNy4xNDEgOC41NDcgMTAuOThjNC4xNjUgNC4zNCAzLjMwNy00Ljc5NSA4LjI5OC40MjVjLTMuMTYtNC42NS0xNi43MTUtMTMuMS01LjgtMTAuMzljLS4wNi00LjY3Ni0xLjk3Ni04LjQ1IDEuMzcyLTguMzU5YzMuMzE2LTUuOTk2LTMuNDcyIDE0Ljc5MiAzLjk5NiA3LjE2OGMyLjA2NS0uOTAyIDIuNTgzLTYuMDAzIDYuMjk3LjQ4NGM1LjM5NCA1LjMxIDEuOTQ5IDkuMTUzLTUuNjYzIDQuMjg5YzEuMzYgNC42MjMgMTAuMTgxIDYuMjcgOC41MiAxMy40OTdjMS43NTggNi4zNTYgNC4yMTggNC4wMTQgNi4zNjIgMy42NDhjMS42OCA2LjE3MyAyLjYzNyAxLjYzNSAyLjcxNS0xLjMwOGM3LjY5NiAxLjY1IDUuODkxIDYuMiA4LjMwMyA5LjM3OGM1LjMwMyAyLjM5Mi03LjU5MS0xNi4yMjQgMS41MTItNS41OThjOS41NzggOC42NTEgMy41OTYgMTIuMjYtNS4wMDIgMTAuODc1YzUuNDQtLjQ0IDcuMTkxIDcuMzU3IDE0IDcuMDgyYzYuMjA1IDIuOTU1IDEwLjQxIDE0LjI5NC0uMjg4IDkuNTcyYy0zLjcwOC0zLjM0OC0xNi44NDYtNy40NzQtNi4xMTQtMS4xMTFjOS45IDQuNTkgMTcuNzczIDcuMzMgMjcuMzI2IDEzLjA5MmM2LjgzNCA0Ljg3OCA5Ljc4OCAxMC40NjcgMTIuMzc4IDExLjU3NGMtNS43NDcgMi43NDUtMTcuMzE0LTIuMTkxLTguNzIzLTMuNzAxYy01LjM2Mi0uOTc1LTExLjM5LTMuNjg4LTYuMjU4IDIuOTg4YzQuMzY4IDMuNjQ5IDE1LjQ2NSAzLjI2MiAxNy40NiAzLjY3NGMtMS42ODcgMy43MTUtNC41ODMgNC4wMS4wNjUgNC4yOTdjLTUuMTg2IDIuNzY2IDEuNjY4IDMuMTk4IDIuMTQ1IDQuNzczWm0tMTAuNjA2LTI5Ljk1NWMtMy4xNTgtMy4zMDItMy45NzUtOS40ODEtLjU2Mi00LjEwOGMxLjc1My43MDcgNS42MDUgMTAuMTA1LjU2MiA0LjEwOFptMzQuNTQ3IDIxLjk0NWMxLjk2OC0uMTMuMDU4IDEuNDk2IDAgMFptLTM5LjUyOC0zMC4wNGMtLjEyNi00Ljk5IDEuMTM2IDMuODUgMCAwWm0tMy40MzQtNC42MTdjLTMuOTc1LTcuNjcgNS4wMDIgMi4xNzEgMCAwWm0tNDEuNjE1LTI4LjcxOWMyLjMzNS0uNjIzIDEuMTUxIDMuOTg3IDAgMFptMzMuMTIxIDE3Ljk0OWMxLjQzMi01LjM4MiAxLjY4MSA0LjUxMyAwIDBabS0yMy4zOTctMTYuMjdjLTEuNjQ3LTIuOTY4IDMuNDQ3IDIuNzg3IDAgMFptMjAuMDc1IDYuNDM1Yy0zLjc2LTguNDIyIDIuNjY4LTQuNjA0LjgzNyAxLjM4bC0uODM3LTEuMzhabS0zNC42MjQtMjMuMDljLTEuNjgtMi43NjUtNC40Ni0xMC44NzQtMy41NjQtMTMuMzUxYy44MDQgNC4wMzQgOC41NzMgMTcuMzU0IDMuODA1IDUuNTE5Yy01LjI2My05LjkyIDYuMjk4IDMuMjE2IDcuNDg4IDUuNjk1Yy41NTYgMi40NTktMy4yNS0uNjczLS42NzQgNS4xYy00LjcwMS02LjU3Mi0yLjc3MyAzLjYzLTcuMDU1LTIuOTYzWm0tMTAuNjk4LTcuMzc1Yy40MzgtNi40MjggMi40NDYgNC40MDcgMCAwWm00LjgxMyAxLjY2YzIuMjk1LTQuODUgMy44OSA2Ljc2MiAwIDBabS0xMS41ODEtOC45NTdjLTMuOTgzLTMuOTY0LTYuODY3LTcuNjEyLjE4OS0yLjQ2YzIuNzE0LjEwNS02LjA0MS04LjI5Ny42NTUtMi42NjhjNy4wMzUgMS4yODMgMy40NzEgMTEuNTQzLS44NDQgNS4xMjhabTYuMDgxLS4xNTdjMi4zMTYtMi4yOTUgMS4yMyAyLjI1NiAwIDBabTMuNzQ3IDEuMTk2Yy0zLjUxMi02LjU3MiA0LjI1NyAyLjc2IDAgMFptLTcuNDQxLTcuMTA3Yy0xMS41OC0xMC4zMTQgMTQuNTQ5IDUuMzg3IDEuODkgMS45MDhsLTEuODktMS45MDhabTMzLjE4NSAxOS4yNzZjLTUuMDE1LTMuMDAyLTEuMzM0LTIxLjE1My4zOC04Ljc0MmM0Ljg3Mi0xLjU3Ny0uMjcgNi40MTUgMy4zNiA2LjMzNmMtLjU2OCA1LjA0LTIuMTk2IDYuODU0LTMuNzQgMi40MDZabTEyLjI3NCA3LjI1OGMuNDktNS40NzIgMS4wMzMgMy43NDIgMCAwWm0tMi4xMzEtMi4xMTJjLjU0OS0yLjMzNC4wNTIgMi43NTMgMCAwWm0tNDEuMDYtMjcuODFjLTcuNDQtMTAuMjY3IDIxLjYyNSAxMC4zODMgNC43NjggMi42MDNjLTEuNzYtLjQ2NC0zLjg4NC0uNjI4LTQuNzY4LTIuNjAzWm0yMy42MzkgMTIuNTNjLS43MDUtOC42NDUgMS41NyAxLjQzIDAgMFptMTcuOTQzIDExLjUxM2MxLjM4Ni00LjkyMy4xMDYgMy4yNTggMCAwWm0tNDAuNDM3LTI3Ljk2YzQuNDIxLS45NDggMTguMzIyIDcuNzYyIDUuNTU4IDIuNDg1Yy0xLjQxOC0xLjU3LTQuNDQ2LS44NTctNS41NTgtMi40ODZabTM3Ljk3MSAxOC45MjRjLjQ3My04Ljg0IDIuNjQ0LTUuMjc3LjAyIDEuMjY5bC0uMDItMS4yN1pNNTMuMTcxIDg1LjM3NWMxLjgwNC0yLjY0My00Ljc4OC0xMS45NDcuOTQ3LTMuMzM2YzIuNDggMS45NjggNy4xNzMgMy4yOTYgMy4wMjggNC4xMjZjNi41MTkgNS43NDktMS41ODggMS41NTctMy45NzUtLjc5Wm0zMi44MDUgMTkuMjQ0YzEuMjQ0LTEwLjA3IDEuMSA1Ljg5OCAwIDBaTTQ5LjQwNCA3Ni4wNzZjMS4zOC0uNTkuNzMyIDEuODM2IDAgMFptOC41NiA1LjA5NGMyLjIwMi00LjYyNCA0LjA2IDUuMTUyIDAgMFptMjQuMTM1IDEzLjQyNGMtLjAyLTEuNzcyLjQ1NyAyLjU4MyAwIDBabS0xLjQtMy4wOTJjLTMuMzQ4LTguMjY2IDMuMTIgNC4zNzQgMCAwWm0tMi4wNTQtNS40MjJjLS41Ni0zLjQxNCAxLjkxIDQuMjkgMCAwWm0zLjM0OC01LjQ0Yy0yLjMwMS00LjA0OSAyLjkwNS0xNy44NTIgMy40ODctOS4yOTJjLTIuNDI3IDYuNjctLjcgMTAuMzk4Ljk4NiAxLjQ1MmMzLjEyNy03LjAzNi0uNjczIDEzLjg5Ni00LjQ3MyA3Ljg0Wm0zLjQ0LTIwLjUyNmMxLjAwMi0xLjIzLjIyMyAxLjQ4MyAwIDBabS01Ljc0NiAxMTMuMjFjLTEuMzYxLTEuMTkuMTc1Ljc1MyAwIDBabTExLjgzNSA1Ljk4NGM2LjU4NCAxLjY5NCA2LjU1Mi0xLjAyMS42LTEuODMyYy0zLjE5Ny0yLjk3NC0xMy4zLTYuMTMzLTQuMjU2LS4zNjZjLjU5NiAxLjUxOCAyLjQ4NiAxLjQ3OCAzLjY1NiAyLjE5OFptLTIzLjM3LTE1LjUyNWMzLjYyMiAyLjcwOSAxMy42NTkgNy42NjQgNS4xNjUgMS4wMzVjMi44NjQtMy4zMy01LjQ4LTUuMTAxLTIuNzEzLTcuMzNjLTcuMDQzLTQuMzExLTUuNTYtMy45MjUtLjYyMS0zLjc4N2MtOC40NjItMy43ODcgMS4yMjItMy40OTkuNzY1LTUuNDRjLTMuMjYzLS42NDItMTYuMjExLTUuNzU2LTguNTkzLjQxOGMtNy43NDItMy45NDQtMS44NDUgMS40NzEtNC4xODUuOTAyYy03LjkyLTIuMTU4IDcuMDUgNi4wMy0xLjI1NiAzLjk5NmM0LjUzOSAzLjU5NiAxMi4yMjIgOS4yMiAxLjkxNiAzLjgwNWMtMS4zNTMgMS45NTUgNy4zNzcgNC45MTggOS41MjEgNi40MDFabTEyLjM3NyA3LjExNWMxNS4wNDcgNC44NDYtNy4zODMtNS45MzEgMCAwWm02My4zNjQgMzguMzg0Yy4xOTYtMi45ODgtMi4wNTQgMi41NSAwIDBabTYuNTEzIDIuNzRjMy40NzItMy4zNi4xNDQgNS4zNjIgNS43NTQtLjgyM2MuMDU4LTQuNDI4LS4xNy03LjA0Mi02LjQ0Ny0xLjY2MmMtMS43MzQuOTYyLTIuNTA0IDUuMDM1LjY5MyAyLjQ4NlpNNDcuMDI0IDE0Ny4wOThjLTEuMDY3LTQuMTkyLTcuNDc1LTQuMTc0IDAgMFptNi45NSA0LjU1NmMtMi41ODMtNC4yODItOS4yMTQtMy44NzcgMCAwWm0zOS41NjggMjMuODYxYzMuODY2IDMuNDM0IDE3Ljc0MSAyLjUxOCA0LjY5LjQyNmMtMS45My0yLjg1OC0xMi4yNjgtMi4xNzEtNC42OS0uNDI2Wm01NC4zODUgMzMuNTkzYzUuOTQ0LTQuOTktNS43NiAyLjIyMyAwIDBabTEyLjM2NiA4LjQ5M2MuMDM4LTEuNjAyLTIuNTYzLjcgMCAwWm0uMDItMi4yNDNjNi41ODQtNi45Ny02LjM3Ni40MTIgMCAwWk0yOS45MTcgMTMyLjc3NmMtNS42MS04LjAwNC0zLjQ4NS0xMS42MDEtOC44OTktMTguMTRjLTEuMDI4LTUuMDAyLTkuMjg1LTE2LjM0MS00LjI3LTQuMzI5YzQuNTkgNy4wMyA1Ljk1IDE3LjkxIDEzLjE3IDIyLjQ2OVptMTI4LjMyOSA4MC4zNjVjMTIuMTE4LTcuODI4LTQuOTY5LTMuNDA3IDAgMFptOS4yNDcgMy42MjJjNi4wNjgtNS4yMDYtMy44MzktMS4wODYgMCAwWm0tMTIyLjUzLTc4LjUxNWMxLjczNC0yLjU4My00LjQ4NS0uMzMzIDAgMFptMTIwLjYgNzYuMDQzYzUuODcyLTMuNzg1LTEuMzUzLTMuMjA0LTEuMDY1LjM0NmwxLjA2NS0uMzQ2Wm0tNzkuNjk4LTUwLjIzM2MtLjIwMi0yLjU2My0zLjEwNS4yMTYgMCAwWm00LjkyNCAyLjgzMmMtMS41NjktMy4xNjUtMi40MDYuNDk3IDAgMFptODQuMTk3IDQ5Ljk1OWM3LjUyNi01LjQyOS00LjU1Ny0xLjA0MS0xLjU3NiAxLjAzM2wxLjU3Ni0xLjAzM1ptLTIuODgzLTEuMzkzYzYuMTMzLTUuMTM0LTYuNDY4IDIuMjc1IDAgMFptMTQuNzI0IDkuODAxYzQuMTE1LTIuNzUzLTUuMDAxLS44ODkgMCAwWm0tMTM4LjA5LTg4Ljg3MmM1LjUxMiAxLjIzNSAyMi4wNDIgMTMuNTgxIDEyLjI5My44NTdjLTQuOTk1LTEuNDc4LTItMTMuNjg3LTcuMDk0LTExLjUyOWMzLjQyIDUuNzE1IDIuODEgOC4xNC00LjM3IDQuNTQ1Yy05LjAxNi00LjQwOC01LjA2NyAyLjE3OC0zLjMgMy45OTZjLTIuNDA4LjU0OSAzLjE3NyAyLjA4NiAyLjQ3IDIuMTNabS0yNS4xMy0xOS44NDVjLjk4Ny00LjA4OC05LjA5Ni0yMi40NjktNC43Ni05LjIxNGMxLjU2MiAyLjc3OSAxLjQgOC4wNDIgNC43NiA5LjIxNFptNDYuMTI2IDI4LjQzN2MtMi44NDQtMi4zNzMtLjEzNy0uMzQgMCAwWm02Ljk5IDEuNjNjMC00LjMzLTcuNzI4LTEuNzYgMCAwWm02MC42MTggMzguMjA3Yy0xLjE1Ny0yLjk1Ny00LjU3LS4wNjYgMCAwWm0yLjkxIDIuMTI0Yy0uNDMzLTEuNjU0LTEuNjgyLjMyMSAwIDBabTI0LjAyNCAxNS4xMzhjMi4zMDktMS43MDYtMi44ODQtLjIyMSAwIDBaTTM2LjE1NiAxMTkuNzQ0YzYuNjEtMi41NTgtNy4wODMtMS44MjUgMCAwWm05NS44NDggNjAuMzhjLS4wNzctNC4yNzYtNC4yMTcgMS4wNjcgMCAwWm0tOTguNDU4LTY2LjQ2OWM0LjI0NC0xLjQzLTMuOTMtLjk0IDAgMFptMTIuMzIgNS45N2MtLjA3My0xLjQwNS0xLjMwMS41MzcgMCAwWm0xNTAuMyA5Mi4xNjhjNS40Ni0xLjEwNSAxNy45MDQgMi43OCAxOS45MTEtMS40NDRjLTYuNjMtLjE2NC0yMi45MzItNC42ODMtMjMuNzA0IDEuMDcxbDEuNDUyLjIzbDIuMzQyLjE0M1ptLTE0Ni4zODQtOTEuMThjLjEtNC4zMzYtMy4zOC0uMTYzIDAgMFpNMTcuMzkgOTguMTM4Yy0xLjQ3MS04LjI2LTUuNTk4LTEuMjUgMCAwWm03LjcyMiAxLjk0MmMuMDk5LTIuNjU1LTcuMDctMi4zODcgMCAwWm00LjQxNCAyLjE3MWMtMS4yNzUtMS4wMzQtLjk5NCAxLjMgMCAwWk01Ny4zMSAxMjAuMDdjMS4zMDktMS4yMDQtMy4wOTktLjg4OSAwIDBaTTI2LjU5IDk3LjM2Yy0uNzUxLTYuMjM4LTguOTUyLS45MzUgMCAwWk0xMC43NDUgODcuMDhjLS4yMjMtMi44NzctMS41NDQgMS4wODUgMCAwWm0yLjM2LTEuNzc3Yy0uMzg1LTMuNDE1LTIuMDI3LjQzIDAgMFpNMjYuMTIgOTMuMDdjNS41MDYtMi4xNTgtMTAuMDI2LTQuNDczLTEuMTI1LS40MDVsMS4xMjUuNDA1Wm0xNzQuMjI2IDEwNy42MmMzLjUyNC0zLjIzLTQuNDczLTEgMCAwWm0yMS4wNDkgMTAuOTA3YzEuNDEzLTQuMTcxLTMuNTU4LjU1IDAgMFpNMjcuNDUgODYuMjVjLjU4My00LjA0LTQuMzY3LjgwNCAwIDBaTTguOTI3IDczLjg0Yy0uOTk0LTUuNzAyLS44NTctMTUuNzE0IDguNjU4LTEyLjMzM2MtMTIuNyAyLjUyNCA4Ljc5NSAxNS43OSA2LjA4MSA1LjMxNWM1LjM0Mi4yNjMgMTAuNDUtMy4xNTcgNy42NDQgMi4wMjdjMTAuNTI4LTEuMTU3IDE3LjgyLTEwLjI4NSAyNy45ODctOS4wMDNjNy45MTgtMS4wNTIgMTYuNTc2LTEuODQ0IDI1LjExLTUuMDM1YzcuMDE2LS41MDQgMTMuNzctOC4wNTcgOS45MjctMTIuNTM2Yy05LjU2Ny0uODEtMTkuNTg2LjM4Ni0zMC4xNTkgMi40OTJjLTExLjcxNyAyLjQzMi0yMi4zNjIgNy4wNjEtMzQuMTg2IDkuMDVjLTExLjUyOSAxLjU1IDIuMzE1IDQuMjYzLS45ODggNC44NzFjLTYuMDEgMi4wODYgNy4xNzQgMy40OTItLjc3OCA1LjY5NWMtNC45MS0uOTM0LTEwLjAyNC0yLjYyMS03LjkyNS03LjhDOS4yNiA1OC4wMjEtLjQ0NCA2Mi41OTggOC4yOCA3My44MzJsLjY0OC4wMDZabTI2LjYwOC0xMy41NWMyLjU4My05LjUzMyAxMy44NjIgNy44NDggNC4yMzcgMS4yNjljLTEuMTQ1LS44NjQtMy4wNDItMS41NjQtNC4yMzctMS4yNjlabS41MDItNC42MjRjMy43MzUtMi43NzggMS45ODIgMS41NjQgMCAwWm00Ljc0MS4wOGMuMzQyLTQuMzg4IDEwLjg2MyAyLjMyMSAxLjczNCAxLjU3NmwtMS43MzQtMS41NzdabTYuNDg3LTIuNjA5YzIuMzc0LTIuNzc0LjY4OCAyLjQ1OCAwIDBabTEuNjYyLTEuMTExYzMuOTQ5LTQuNzQxIDIyLjM0My0zLjAyOSA4Ljg3OS0uNDY2Yy0zLjYxLTIuNzItNi4zNzUgMS42MDItOC44NzkuNDY2Wm0yNC4wMS0zLjcwMmMtLjU5NC0xMi45NTUgMTEuOTM0IDQuNTk3IDAgMFptNi44MTUtLjA0YzIuNDktNi41MjUgOS42Ny0yLjYyMSAxLjE1Ny0xLjMxNGMuMTgyLjctLjI1NSAzLjM3NS0xLjE1NyAxLjMxNFpNMjQuNzY1IDgyLjkwMmM3LjQ0LTQuNTU4LTcuOS0zLjk1NSAwIDBabTUuNTA1IDEuNTI0YzIuNjEtMi43NzItNS42NzYtMS4xMjUgMCAwWk0xNC4wNTQgNzIuOTI0YzQuMjUtMy4yNy01LjAzNS0xLjI0MiAwIDBabTIxOS43NjQgMTM3LjQ4M2MuMTI0LTMuNzkzLTMuMjUgMS43MDYgMCAwWm0tMjIuMzMxLTE1LjI0M2MuNjM0LTQuMzYtMi44Ny4zOCAwIDBabTI4LjQ3MSAxNi43MTVjNS45NDUuMDIgMTguMDE0LTEuODUyIDUuMDgtMS44NDVjLTIuMDMzLjMxNS0xMS44MjguMjUtNS4wOCAxLjg0NVpNMzUuMTEgODEuNzVjNC44MTMtLjMyNyA3LjUyNi01LjMwNC0uOTM2LTUuMDIyYy0xMy4xMS0xLjM1MyAxMS41NjcgNC40OTMtMS42OCAyLjgxOWMtMS43NzggMS4xNzcgMi41MSAyLjUzIDIuNjE2IDIuMjAzWm00LjIzNyAyLjE0NmMtLjUwNC0zLjA4Ny0xLjQ5MiAxLjY0IDAgMFptNS4wMjgtMTMuNDA2YzIuMDg2LTIuNTktMi44OS0uNjkzIDAgMFpNMjguMzY3IDQzLjc0YzguNTkzLTIuOTE2IDIwLjMzNy02LjE5OSAyNC4zOTIgMS40NGMtNC4xMjctNC45NjMtMS42NjctOS44NTUgMi4yMy0yLjU5YzUuNTEyIDcuMzQ0IDguMjctMy4zNDEgNC42ODctNS44MDdjNC4wODggNS4wNzQgOC43MyA3LjQ3NSAyLjczMy4zMjJjNi41Mi03Ljg0MS0xMy4wNDUgMS4wMjYtMTcuNDkxLjkzNGMtMi4xMzguOTYtMjIuMDg5IDUuMDg3LTE2LjU1IDUuNzAxWm01LjAzNS05LjYzN2M0Ljg5OS0zLjY5NCAxNi45NDMgMi4yMDMgOS4yMTQtMy42NzZjLS43NTgtLjY2Ni0xNi45MjIgNC40Ni05LjIxNCAzLjY3NlptMTcuODU5LjczOGM1LjcyOC4xNDQtMi40NzEtNy43MDMgNC4zNTUtNC4xNDZjLTEuMTE4LTMuNjYxLTcuOTUxLTQuMzQ4LTExLjI5Mi01LjgxMmMtMS44OSAzLjM0OCAzLjg0MyAxMC4wMDQgNi45MzcgOS45NThaTTM2LjUzNCAxOC42M2MxLjk4Mi0yLjY4Ny0zLjQ3OCAxLjM2NyAwIDBabTcuMyAxLjc0NWM5LjIzOC0xLjIyMi0yLjM1Ni0zLjk3NS0xLjg2Ni0uMDk3bDEuODY1LjA5N1pNMzAuMjA0IDkuNzE3Yy02LjUwNy04LjQ5NCAxMi4yMzUgMS40MjYgNS42MjMtNy40NjhjLTUuNTY0LTQuNDI2LTEwLjkwNiA0Ljk5LTUuNjIzIDcuNDY4Wm04My40NyA0NC45NTdjMi45ODQtNS4yODUtMTIuMzEyLTcuMTI4LTIuMDA3LTEuODcyYy45NDguMzE1LjczNCAyLjIzNyAyLjAwNyAxLjg3MlpNNTMuMTA4IDI1MS40OTVjLS42NiAyLjYwNi0xLjA2OSA2Ljk3OS0xLjIyMiAxMy4xMTdjMCAxLjIwNi0uNTQzIDEuODEtMS42MzIgMS44MXMtMS44NDctLjUyNy0yLjI3Ni0xLjU3NmMtMS4xNjYtMi44MzgtMi4yNy00LjgxNy0zLjMyNC01Ljk0N2MtMS4yNDItMS4zMi0yLjg5NC0yLjExOC00Ljk1NS0yLjM5Yy0yLjIxNS0uMzUtNy43MzMtLjUyNS0xNi41NTUtLjUyNWMtMi4wMiAwLTMuMzQzLjIxNS0zLjk2My42NDRjLS4zODkuMjctLjU4My44NTQtLjU4MyAxLjc0OXYyNi40MDljMCAuODk0LjU2MyAxLjMyIDEuNjg4IDEuMjgzYzMuNDYxLS4wNCA4LjQ3NC0uMjc2IDE1LjA0LS43YzEuMjg0LS4xNTggMi4xNS0uNTc1IDIuNTk2LTEuMjU2Yy40NS0uNjguODg3LTIuNDM2IDEuMzEyLTUuMjc1Yy4yNy0xLjU1NSAxLjE4Ni0yLjE1OCAyLjc0LTEuODA2YzEuMzIuMjcyIDEuODg4Ljg3NSAxLjY5MyAxLjgwNmMtMS4wOSA1LjI4OC0xLjQ0MiAxMi4xNjctMS4wNTMgMjAuNjRjLjA0MSAxLjAwOC0uNiAxLjU1NC0xLjkyMyAxLjYzMmMtMS4wOS4xMTctMS43Ny0uNDY3LTIuMDQtMS43NWMtMS4wMDgtNC44NTctMi44ODctNy40NTMtNS42MjQtNy43ODVjLTIuNzQtLjMyOC03LjIwMy0uNDk0LTEzLjM4LS40OTRjLS43IDAtMS4wNDkuMjUxLTEuMDQ5Ljc1N3YyNi4yMzVjMCAxLjk0NC43MTcgMy4yNjcgMi4xNTQgMy45NjRjMS4xMy41ODMgMy41NTggMS4xMDkgNy4yODcgMS41NzVjMS45MDcuMTk0IDIuNzQgMS4wMzIgMi41MSAyLjUwNmMtLjIzNSAxLjI4My0xLjk0MyAxLjc4OS01LjEzMyAxLjUxN2MtOS4yMS0uNzQtMTYuODEtLjctMjIuNzkzLjExOWMtMS42NzMuMjMtMi41MDYtLjQ1LTIuNTA2LTIuMDQxYzAtMS4wMTMuODMzLTEuNTk1IDIuNTA2LTEuNzVjMy44MDktLjQyOSA1LjcxMi0zLjc3MiA1LjcxMi0xMC4wMjd2LTQ5LjkwOGMwLTIuNTYyLS40NTgtNC41MzQtMS4zNjktNS45MTVjLS45MTUtMS4zOC0yLjYxNi0yLjYzNS01LjEtMy43NjFjLTEuNTU2LS43LTIuMTM4LTEuNjUxLTEuNzUtMi44NTdjLjE5NC0uNzM3LjUwNi0xLjE0Ny45MzEtMS4yMjNjLjM4OS0uMTE4IDEuNDIxLS4wNCAzLjA4OS4yMzRjMi40NS4zODggOC4yMjMuNTgzIDE3LjMxNi41ODNjMTAuNzI5IDAgMTkuOTk2LS4yMzUgMjcuODEtLjdjMi42MDMtLjE1OCAzLjkwNy4wNTcgMy45MDcuNjRjMCAuMTU4LS4wMi4zMTEtLjA2MS40NjZabTM3LjgwNyA3NC4wMDdjMCAxLjU1NS0uODc1IDIuMjM1LTIuNjIzIDIuMDRjLTUuMzYtLjUwNi0xMi4wMDgtLjQzLTE5LjkzNi4yMzFjLTEuNTk1LjE1OC0yLjU3NC4xMTctMi45NDYtLjExM2MtLjM3LS4yMzUtLjU1Mi0uODc1LS41NTItMS45MjhjMC0uOTMgMS4wNTctMS43MTYgMy4xNzUtMi4zNmMyLjEyMS0uNjM5IDMuMTc3LTIuNTU0IDMuMTc3LTUuNzRWMjY0Ljg3YzAtMy4xNS0uNDU3LTUuNDYyLTEuMzY4LTYuOTRjLS45MTUtMS40NzctMi41MTgtMi42MjMtNC44MS0zLjQzN2MtMS4yMDYtLjQzLTEuODEtMS4wMzItMS44MS0xLjgxYzAtMS4xNjYuODc1LTIuMDQgMi42MjQtMi42MjNjMi42NDQtLjg1NSA1LjM4NS0yLjE3NCA4LjIyMy0zLjk2NGMyLjMzMi0xLjQgMy44MS0yLjA5NyA0LjQyOS0yLjA5N2MxLjQzNyAwIDIuMTU5Ljk4OCAyLjE1OSAyLjk3MWMwLS4xNTMtLjA3OCAxLjc5LS4yMzYgNS44M2MtLjExMyAzLjg0Ny0uMTUzIDcuNjM2LS4xMTMgMTEuMzdsLjIzIDUyLjA2YzAgMi4zNzIuNTg0IDQuMDkzIDEuNzUgNS4xNjJjMS4xNjYgMS4wNjggMy4xNyAxLjc3NyA2LjAwNCAyLjEyNmMxLjc0OC4xOTMgMi42MjMuODU0IDIuNjIzIDEuOTgzWm01Mi43MjktMy40MzhjMCAuODE4LTEuNDg2IDIuMDUtNC40NTggMy43Yy0yLjk3NSAxLjY1My01LjM1NiAyLjQ3OS03LjE0MiAyLjQ3OWMtMS41MTggMC0yLjg1Ny0uNzM3LTQuMDIzLTIuMjE1Yy0xLjE2Ni0xLjQ3Ny0xLjk4NS0yLjIxNC0yLjQ1LTIuMjE0Yy0uMzQ5IDAtMi4xOTUuNzk3LTUuNTQgMi4zODhjLTMuMzM5IDEuNTk1LTYuNzAzIDIuMzkzLTEwLjA4NCAyLjM5M2MtMy4xODYgMC01Ljg1LS45MzUtNy45ODctMi43OTdjLTIuMzMyLTIuMDYyLTMuNDk4LTQuODYtMy40OTgtOC4zOThjMC02LjcyNCA3LjY5Ni0xMS41NDIgMjMuMDg4LTE0LjQ1N2MyLjY0LS41MDYgMy45ODQtMS41NzUgNC4wMi0zLjIwN2wuMTE5LTMuNzMyYy4yMzQtNi4zNzMtMi41ODQtOS41NTktOC40NTQtOS41NTljLTEuNjcyIDAtMy4yNTUgMS40OTQtNC43NTQgNC40ODZjLTEuNDkzIDIuOTk2LTMuNjQzIDQuNjA3LTYuNDQxIDQuODQyYy0zLjE4Ni4zMDgtNC43ODEtMS4wMzItNC43ODEtNC4wMjRjMC0xLjg2NyAyLjM3Mi00LjA0IDcuMTEzLTYuNTNjNC45NzYtMi42MDMgOS43NTgtMy45MDcgMTQuMzQ0LTMuOTA3YzcuODg4IDAgMTEuNzk0IDMuNzUzIDExLjcxNyAxMS4yNTRsLS4yMzUgMjQuMDE3Yy0uMDM2IDIuNTI3IDEuMDMzIDMuNzg5IDMuMjA3IDMuNzg5Yy40MjkgMCAxLjI0Ni0uMDk2IDIuNDQ5LS4yOTFjMS4yMDctLjE5NCAxLjkwNy0uMjkyIDIuMTAyLS4yOTJjMS4xMjUgMCAxLjY4OC43NjEgMS42ODggMi4yNzVabS0xNy45NTUtMTMuMjljLjA0LS45NzMtLjE4Ny0xLjYxNy0uNjczLTEuOTI0Yy0uNDg2LS4zMTEtMS4yNS0uMzczLTIuMy0uMTc4Yy05LjM2OCAxLjY3Mi0xNC4wNTIgNC43MjQtMTQuMDUyIDkuMTU0YzAgNC40NyAyLjQyOSA2LjcwNCA3LjI4NyA2LjcwNGMxLjk0NCAwIDMuOTQ4LS4zNjggNi4wMDQtMS4xMDVjMi40MTMtLjg1OCAzLjYxNi0xLjg4NiAzLjYxNi0zLjA5M2wuMTE4LTkuNTU5Wm02MS4yOTkgNi41ODNjMCA0LjEyLTEuNTg4IDcuMzk3LTQuNzUzIDkuODI1Yy0zLjE2NyAyLjQzLTcuNDkgMy42NDQtMTIuOTcyIDMuNjQ0Yy0zLjY1MiAwLTcuMzA4LS4zODgtMTAuOTYtMS4xNjZjLTMuMTUtLjctNC45NzYtMS4zNC01LjQ4MS0xLjkyM2MtLjMxMi0uNTQ3LS40NjYtMy4yMDYtLjQ2Ni03Ljk4OGMwLTIuMDYuNDY2LTMuMTMgMS40LTMuMjA2Yy45MzItLjExOCAxLjczLjM4OSAyLjM5IDEuNTE0YzIuOTE0IDUuMDkzIDcuNjE4IDcuNjQgMTQuMTA5IDcuNjRjNS40NzcgMCA4LjIxOC0xLjkwNyA4LjIxOC01LjcxN2MwLTEuNjY4LS42Mi0zLjA2OS0xLjg2Ni00LjE5NWMtMS4zNjEtMS4yODMtNC0yLjc4LTcuOTI3LTQuNDljLTUuNjc2LTIuNTI1LTkuNDY2LTQuNzQtMTEuMzY5LTYuNjQ3Yy0yLjA2MS0yLjAyLTMuMDktNC43NC0zLjA5LTguMTYyYzAtNC4xOTkgMS42MTMtNy40NjEgNC44MzktOS43OTNjMi45OTItMi4yNTYgNi45OTYtMy4zODEgMTIuMDA4LTMuMzgxYzMuMTUgMCA2LjAyNS4yNSA4LjYzMi43NTdjMi43OTguNTA2IDQuMjU1IDEuMTI2IDQuMzcyIDEuODY2Yy4zMDggMi4xNzQuOTUyIDUuMzI0IDEuOTI0IDkuNDQ2Yy4xMTcuNTAyLS40My45MTEtMS42MzIgMS4yMjJjLTEuMjg0LjI3Mi0yLjEzOC4wNTctMi41NjctLjY0Yy0zLjA2OS01LjAxNi02Ljk1NS03LjUyMi0xMS42Ni03LjUyMmMtNS4zMjQgMC03Ljk4NyAxLjcxLTcuOTg3IDUuMTNjMCAxLjkwNi43MiAzLjQyIDIuMTU3IDQuNTQ2YzEuMjg0Ljk3MiA0LjI5NSAyLjQ5IDkuMDM3IDQuNTUxYzQuOTc1IDIuMTM3IDguMzU2IDQuMDYxIDEwLjE0NiA1Ljc3YzIuMzMyIDIuMjE0IDMuNDk4IDUuMTkgMy40OTggOC45MTlabTY4LjU4NyAxMC4yMDNjMCAxLjM2LS45MTUgMi4wOC0yLjc0MSAyLjE1N2MtMi43MjEuMDQtNi4yOC4yMzQtMTAuNjY4LjU4M2MtMi4xNzguNDI5LTMuNzMzLjE1OC00LjY2NC0uODE0Yy02LjE0Mi02LjYwNy0xMS4zNTItMTMuNTI2LTE1LjYyOC0yMC43NTdjLS4zNDgtLjYyLS43OTQtLjkzMS0xLjM0LS45MzFjLS42NiAwLTEuODA1LjU4My0zLjQzNyAxLjc1Yy0xLjgzIDEuMDA4LTIuNzQxIDIuNDQ4LTIuNzQxIDQuMzFjMCAxLjMyNC4wMzYgMy4yMjcuMTE3IDUuNzE4Yy4wNzggMi40ODUuNjk3IDQuMTE2IDEuODYzIDQuODk0Yy44MTcuNTQ3IDIuNzA1Ljk3MiA1LjY1NSAxLjI4NGMxLjgyNy4yMzQgMi43NDIuOTE0IDIuNzQyIDIuMDRjMCAuODk1LS4xNDYgMS40NS0uNDM4IDEuNjZjLS4yOS4yMTQtMS4wNi4yNjMtMi4zMDQuMTQ2Yy0zLjg4Ni0uMzQ4LTEwLjQ1My0uMTU0LTE5LjcwMy41ODNjLTIuMzMyLjE5NC0zLjU5Ni0uMDk4LTMuNzktLjg3NWMtLjA3Ny0uMjctLjExOC0uNjYtLjExOC0xLjE2NmMwLTEuMjAyIDEuMTg3LTIuMTE4IDMuNTYtMi43MzZjMi4xMzctLjU0OCAzLjIwNS0zLjA1NCAzLjIwNS03LjUyM3YtNTAuOTU1YzAtMy4xODYtLjMxLTUuNDAxLS45MzUtNi42NDRjLS44NTQtMS41OTUtMi42NDQtMi44MzktNS4zNjQtMy43MzNjLTEuMjgtLjQyNS0xLjkyMy0xLjAyOC0xLjkyMy0xLjgwNmMwLTEuMTMuOTE1LTIuMDA0IDIuNzQtMi42MjNhMzYuNTU1IDM2LjU1NSAwIDAgMCA4LjMzNi00LjAyNGMyLjEzOS0xLjM5NyAzLjQ2Mi0yLjA5OCAzLjk2NC0yLjA5OGMxLjU5NiAwIDIuMzkzIDEuMDA4IDIuMzkzIDMuMDMzYzAtLjI3NS0uMDIgMS42NTItLjA2MSA1Ljc3YTkzNS4zNzEgOTM1LjM3MSAwIDAgMC0uMDU2IDExLjQyOGwuMTE3IDM2LjQ5NGMwIDEuMDEyLjI3MSAxLjUxNC44MTQgMS41MTRjLjU4MyAwIDEuNDc4LS41MDIgMi42ODQtMS41MTRjMy4yMjYtMi41MjcgNy4xOS01LjgzIDExLjg5MS05LjkxMWMuOTM1LS45NzEgMS40LTEuNzQ5IDEuNC0yLjMzMmMwLTEuMDQ4LTEuNTc0LTEuNzktNC43Mi0yLjIxNGMtMS4zNi0uMTU5LTIuMDA0LS45MTUtMS45MjgtMi4yNzZjLjExOC0xLjM2Ljc5OS0xLjk0MyAyLjA0MS0xLjc0OWMyLjgwMi4zOSA2Ljg4My42MDQgMTIuMjQzLjY0NGMzLjczMy4wMzYgNy40NDUuMDU3IDExLjEzOC4wNTdjMS4yMDIuMDQgMS44MDYuNzU3IDEuODA2IDIuMTU4YzAgMS4zMi0uOTUyIDIuMDQtMi44NTUgMi4xNThjLTIuOTk2LjExMy01LjgxNC43OTMtOC40NTMgMi4wNGMtMy42OTMgMS42NjgtNy42NCA0LjYwMy0xMS44MzggOC44MDJjLS4zMDguMjM0LS40NjYuNTI1LS40NjYuODc0YzAgLjU0My42NiAxLjg0NyAxLjk4NCAzLjkwN2M0Ljg1OCA3LjM4NSA5LjQ0NSAxMi45NiAxMy43NTcgMTYuNzMyYzIuNzYxIDIuMzcgNS4zNDQgMy41NTUgNy43NTMgMy41NTVjMS43OSAwIDIuODk4LjEyNiAzLjMyMy4zOGMuNDMuMjUzLjY0NS45MjQuNjQ1IDIuMDFaIi8+PC9zdmc+'

myImage.addEventListener("load", function () {
  const canvas = document.getElementById("icon-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;

  class Particle {
    constructor(effect, x, y, color){
      this.effect = effect;
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.originX = Math.floor(x);
      this.originY = Math.floor(y);
      this.color = color;
      this.size = 10;
      
      // this.size = this.effect.gap;
      this.vx = Math.random() * 2 - 1;
      this.vy = Math.random() * 2 - 1;
      this.ease = 0.01;
      this.dx = 0;
      this.dy = 0;
      this.distance = 0;
      this.force = 0;
      this.angle = 0;
      this.friction = 0.95;

    }
    draw(context) {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.size, this.size)
    }
    update() {
      // distance from mouse to particles
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;

      // pythagorean formula, to get hypotenuse
      this.distance = this.dx * this.dx + this.dy * this.dy;
      this.force = -this.effect.mouse.radius / this.distance;

      if (this.distance < this.effect.mouse.radius){
        this.angle = Math.atan2(this.dy, this.dx);
        this.vx += this.force * Math.cos(this.angle);
        this.vy += this.force * Math.sin(this.angle);
      }
      
      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
    }

    warp() {
      this.x = Math.random() * this.effect.width;
      this.y = Math.random() * this.effect.height;
      this.ease = 0.05;
    }

  }

  class Effect {
    constructor(width, height){
      this.width = width;
      this.height = height;
      this.particlesArray = []
      this.image = myImage;
      this.particles = 100;

      // find centre of canvas
      this.centerX = this.width * 0.5;
      this.centerY = this.height * 0.5;

      // console.log(this.image.height);
      // subtract default image dimensions from center value
      // from tutorial (image too small so need to subtract this.width, this.height instead)
      // this.x = this.centerX - this.image.width * 0.5;
      // this.y = this.centerY - this.image.height * 0.5;
      this.x = this.centerX - this.width * 0.5;
      this.y = this.centerY - this.height * 0.5;
      
      // speed up process, when searching through pixel data
      this.gap = 5;

      // get mouse
      this.mouse = {
        radius: 3000,
        x: undefined,
        y: undefined
      }
      
      window.addEventListener('mousemove', event => {
        this.mouse.x = event.x;
        this.mouse.y = event.y;
      });
      
      
    }

    init(context){
      context.drawImage(this.image, this.x, this.y, this.width, this.height);     
      const pixels = context.getImageData(0, 0, this.width, this.height).data;

      for (let y = 0; y < this.height; y += this.gap) {
        for (let x = 0; x < this.width; x += this.gap) {
          const index = (y * this.width + x) * 4; 
          const red = pixels[index];
          const green = pixels[index + 1];
          const blue = pixels[index + 2];
          const alpha = pixels[index + 3];
          const color = 'rgb('+ red + ',' + green + ',' + blue + ')';

          if (alpha > 0) {
            this.particlesArray.push(new Particle(this, x, y, color));
          }
        }
      }
      
    }

    draw(context) {
      this.particlesArray.forEach(particle => particle.draw(context));
      
      // default draw method without assigning size of image
      //context.drawImage(this.image, this.x, this.y)
    }
    
    update() {
      this.particlesArray.forEach(particle => particle.update());
    }

    warp() {
      this.particlesArray.forEach(particle => particle.warp())
    }

  }

  const effect = new Effect(canvas.width, canvas.height);
  effect.init(ctx);  

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.draw(ctx);
    effect.update(); 
    requestAnimationFrame(animate);
  }
  animate();

  // reset button
  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', function() {
    effect.warp();
  })

});

/* 
// Rain effect TBC
myImage.addEventListener("load", function () {
  const canvas = document.getElementById("icon-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 550;

  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(pixels);

  let particlesArray = [];
  const numberOfParticles = 5000;

  let mappedImage = [];
  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      const cell = [(cellBrightness = brightness)];
      row.push(cell);
    }
    mappedImage.push(row);
  }

  function calculateRelativeBrightness(red, green, blue) {
    return (
      Math.sqrt(
        red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
      ) / 100
    );
  }

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = 0;
      this.speed = 0;
      this.velocity = Math.random() * 0.5;
      this.size = Math.random() * 0.9 + 1;
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
    }

    update() {
      this.position1 = Math.floor(this.y);
      this.position2 = Math.floor(this.x);
      this.speed = mappedImage[this.position1][this.position2][0];
      let movement = (2.9 - this.speed) + this.velocity;
      
      this.y += movement;
      if (this.y >= canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }

    draw() {
        const pixel = mappedImage[this.position1][this.position2];
        const red = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4];
        const green = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4 + 1];
        const blue = pixels.data[this.position1 * 4 * pixels.width + this.position2 * 4 + 2];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${pixel[0]})`; //color pixel rain
        //ctx.fillStyle = `cyan`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
  }

  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }

  init();
  function animate() {
    // ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    //ctx.fillStyle = "rgba(0, 0, 0)";
    ctx.fillStyle = "rgba(24, 26, 27)";
    //ctx.fillStyle = "rgba(255, 255, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;
    for (let i = 0; i < particlesArray.length; i++){
      particlesArray[i].update();
      ctx.globalAlpha = particlesArray[i].speed * 0.5;
      particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
});
*/