QUESTIONS = {
    1: "Can you code in Ruby?",
    2: "Can you code in JavaScript?",
    3: "Can you code in Swift?",
    4: "Can you code in Java?",
    5: "Can you code in C#?"
}


results_list = []

def ask_q_and_get_a(question):
    answer = input(f"{question}\n")

    if answer.lower() == "y" or answer.lower() == "yes":
        results_list.append(0)



for q in QUESTIONS.keys():
    question = QUESTIONS[q]
    ask_q_and_get_a(question)

print(results_list)

final_output = (len(results_list) / len(QUESTIONS.keys())) * 100

print(f"{final_output}%")


    

