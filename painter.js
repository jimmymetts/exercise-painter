// console.log("test")


let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    action: function () {
        // alert("no mistakes, just happy accidents!");
    },

    paid: function (hours) {
        // let hours = prompt("how many hours did he work");
        let pay = hours * this.cost_per_hour;
        console.log("painter", painter);
        alert(`the painter made ${pay} for ${hours} hours of work`);
    }
  }

painter.action();
painter.paid(12);
