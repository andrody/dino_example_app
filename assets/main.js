Dino.on("ticket", function(data) {
    console.log("[APP]", data)
    console.log(document, document.getElementById("ticket-subject"))
    document.getElementById("ticket-subject").innerHTML = data.ticket.subject
    document.getElementById("ticket-id").innerHTML = data.ticket._id
})