// Get references to form elements and response area
const tipsForm = document.getElementById('tipsForm');
const userNameSpan = document.getElementById('userName');
const tipResponsesDiv = document.getElementById('tipResponses');

// Define tips data (expanded with more tips)
const tipsData = {
    reduceWaste: `Reduce, Reuse, Recycle: Prioritize reducing waste, reusing items, and recycling materials.
Compost: Set up a compost bin for organic waste like food scraps and yard trimmings.
Buy in Bulk: Purchase items in bulk to reduce packaging waste.
Avoid Single-Use Items: Use reusable bags, bottles, and containers instead of single-use plastics.
Repair and Repurpose: Fix broken items or repurpose them instead of discarding them.
Donate: Give away items you no longer need to charities or thrift stores.`,
    energyEfficiency: `Upgrade to Energy-Efficient Appliances: Look for the ENERGY STAR label when purchasing new appliances, as these are designed to consume less energy.

Use LED Lighting: Replace incandescent bulbs with LED bulbs, which use significantly less energy and last longer.

Insulate Your Home: Proper insulation in walls, attics, and floors can prevent heat loss in winter and keep your home cooler in summer.

Seal Leaks: Seal windows, doors, and any other openings to prevent drafts and reduce heating and cooling costs.

Install a Programmable Thermostat: Set your thermostat to lower temperatures when you're not home or at night to save on heating and cooling costs.

Use Energy-Efficient Windows: Consider double or triple-pane windows to improve insulation and reduce energy loss.

Maintain Your HVAC System: Regular maintenance of your heating, ventilation, and air conditioning (HVAC) system ensures it runs efficiently.

Optimize Water Heating: Lower the temperature on your water heater to 120°F (49°C) and insulate the water heater and pipes.

Use Ceiling Fans: Ceiling fans can help circulate air and reduce the need for heating and cooling.

Wash Clothes in Cold Water: Most detergents work well in cold water, and washing clothes in cold water saves energy.`,
    sustainableTransport: `Low Emissions: Reducing greenhouse gas emissions and air pollutants from transportation.
Energy Efficiency: Utilizing energy-efficient vehicles and fuels.
Reduced Congestion: Improving traffic flow and reducing the need for extensive road infrastructure.
Accessibility and Equity: Ensuring all population groups have access to transport options.
Health Benefits: Promoting modes of transport that contribute to physical health, such as walking and cycling.`,
    ethicalShopping: `Reducing Greenhouse Gas Emissions: Promoting modes of transport that minimize emissions of greenhouse gases (e.g., carbon dioxide) and air pollutants (e.g., nitrogen oxides, particulate matter).

Energy Efficiency: Encouraging the use of energy-efficient vehicles and transportation systems to minimize energy consumption and dependence on fossil fuels.

Promoting Active Transport: Supporting walking and cycling as primary modes of transport for short distances, which reduce congestion, emissions, and promote physical health.

Public Transportation: Enhancing the efficiency, accessibility, and affordability of public transport systems such as buses, trains, trams, and subways to reduce reliance on private vehicles.

Encouraging Electrification: Transitioning to electric vehicles (EVs) and supporting the development of charging infrastructure to reduce reliance on gasoline and diesel-powered vehicles.

Land Use Planning: Integrating transport planning with urban and regional planning to create compact, mixed-use developments that reduce the need for long-distance travel and encourage walking, cycling, and public transport.

Improving Accessibility: Ensuring transport options are accessible to all members of society, including people with disabilities and those from diverse socio-economic backgrounds.

Innovative Technologies: Embracing technological advancements such as autonomous vehicles, smart transportation systems, and shared mobility services to improve efficiency and reduce environmental impact.`,
    ecoFriendlyHabits: `Environmental Impact: Choosing products that are sustainably sourced, produced, and packaged to minimize environmental degradation and resource depletion.

Social Responsibility: Supporting brands and products that uphold fair labor practices, worker rights, and promote safe working conditions throughout their supply chain.

Animal Welfare: Opting for products that are cruelty-free and do not involve animal testing or exploitation.

Community Impact: Purchasing from companies that contribute positively to local communities and economies, including fair trade practices.

Transparency and Accountability: Preferring brands that are transparent about their sourcing, manufacturing processes, and supply chain practices.`,
    greenEnergy: `Reduce, Reuse, Recycle: Practice the three Rs by minimizing waste, reusing items when possible, and recycling materials such as paper, plastics, glass, and metal.

Conserve Water: Fix leaks, use water-efficient appliances and fixtures, take shorter showers, and consider installing water-saving devices like low-flow showerheads and faucets.

Energy Efficiency: Turn off lights and appliances when not in use, use energy-efficient LED bulbs, insulate your home to reduce heating and cooling needs, and upgrade to energy-efficient appliances.

Reduce Single-Use Plastics: Use reusable bags for shopping, carry a reusable water bottle and coffee cup, and avoid single-use plastic items like straws and utensils.

Compost: Compost organic waste such as food scraps and yard trimmings to reduce landfill waste and create nutrient-rich soil for gardening.

Use Eco-Friendly Cleaning Products: Choose cleaning products that are biodegradable, non-toxic, and free from harmful chemicals that can pollute waterways.

Go Paperless: Opt for electronic bills and statements, and reduce paper consumption by using digital documents and communication methods.

Support Renewable Energy: Consider installing solar panels or purchasing renewable energy from your utility provider to reduce reliance on fossil fuels.`,
    zeroWaste: "Strive for zero waste by practicing recycling, upcycling, and reducing unnecessary packaging.",
    consciousConsumption: "Be mindful of your purchases. Choose quality over quantity and buy items that serve multiple purposes.",
    sustainableFood: "Eat sustainably by choosing locally grown and organic foods, reducing meat consumption, and supporting farmers' markets.",
    waterConservation: "Conserve water by fixing leaks, using water-efficient fixtures, and practicing water-saving habits.",
    communityEngagement: "Get involved in community initiatives like neighborhood clean-ups, environmental education programs, or local advocacy.",
    reduceCarbonFootprint: "Reduce your carbon footprint by using energy-efficient appliances, supporting carbon offset projects, and minimizing air travel.",
    sustainableGardening: "Grow your own food using sustainable gardening practices, such as composting, using rainwater, and avoiding chemical pesticides.",
    sustainableClothing: "Choose clothing made from eco-friendly materials like organic cotton, hemp, or recycled fibers. Support sustainable fashion brands.",
    renewableResources: "Use renewable resources whenever possible, such as bamboo products, biodegradable materials, and recycled paper products.",
    greenCommute: "Opt for green commuting options such as telecommuting, biking, or using electric vehicles to reduce emissions from daily travel.",
    sustainableInvesting: "Invest in companies and funds that prioritize environmental sustainability and social responsibility. Consider green bonds and ethical investment options.",
    energyAudit: "Conduct an energy audit of your home to identify areas where energy efficiency can be improved, such as insulation upgrades and appliance replacements.",
    plasticReduction: "Reduce plastic consumption by choosing products with minimal packaging, using reusable alternatives, and participating in plastic-free initiatives.",
    sustainableTravel: "When traveling, choose eco-friendly accommodations, support local communities, and minimize your environmental impact by packing light and offsetting carbon emissions.",
    composting: "Start composting organic waste to create nutrient-rich soil for your garden. Use a compost bin or pile to reduce landfill waste and promote sustainability.",
    ecoFriendlyCleaning: "Use eco-friendly cleaning products or make your own using natural ingredients like vinegar, baking soda, and lemon. Reduce chemical pollution and indoor air contaminants.",
    sustainableArchitecture: "Support sustainable architecture practices by choosing energy-efficient buildings, using recycled materials, and promoting green building certifications like LEED."
};

// Handle form submission
tipsForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get user's name
    const userName = document.getElementById('name').value.trim();
    userNameSpan.textContent = userName;

    // Clear previous tip responses
    tipResponsesDiv.innerHTML = '';

    // Get selected interests
    const selectedInterests = document.querySelectorAll('input[name="interest"]:checked');

    // Display tips for each selected interest
    selectedInterests.forEach(interest => {
        const interestKey = interest.value;
        const tip = tipsData[interestKey];

        if (tip) {
            const tipDiv = document.createElement('div');
            tipDiv.classList.add('tip-item');
            tipDiv.innerHTML = `
                <h3>${interest.nextElementSibling.textContent}</h3>
                <p>${tip}</p>
            `;
            tipResponsesDiv.appendChild(tipDiv);
        }
    });

    // Show the response area
    document.getElementById('response').classList.remove('hidden');
});
