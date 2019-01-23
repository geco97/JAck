$(function () {
    $("form input").change(function() {
        validateFormElements($(this));    
    });

    $("form select").change(function() {
        validateFormSelectElements($(this));    
    });

    // functions
    function validateFormSelectElements(select) {
        if(!$(select).val() && $(select).prop("required")) {
            isInvalid(select);
        } else {
            isValid(select);           
        }
    }

    function validateFormElements(input) {
        let min = 2;

        if($(input).attr("type") === "text" && $(input).prop("required")) {
            if($(input).attr("id") === "Postnummer") {
                validatePostNmer(input);
            } else {
                validateInputValue(input,`Måste minst innehålla ${min} antal tecken`, min);
            }  
        }
        if($(input).attr("type") === "password" && $(input).prop("required")) {
            let comparePassword = findComparePassword();

            if($(input).data("comparewith") !== undefined) {
                validatePassword(comparePassword[0], comparePassword[1]);
            } else {
                min = 8;
                validateInputValue(input,`Måste minst innehålla ${min} antal tecken`, min);
                validatePassword(comparePassword[0], comparePassword[1]);            
            }
        } 
        if($(input).attr("type") === "email" && $(input).prop("required")) {
            validateEmail(input);
        }

        if($(input).attr("type") === "tel" && $(input).prop("required")) {
            validateTelephone(input);
        }
        if($(input).attr("type") === "date" && $(input).prop("required")) {
            validateDate(input);
        }
        if($(input).attr("type") === "radio" && $(input).prop("required")) {
            validateRadio(input);
        }
        if($(input).attr("type") === "checkbox" && $(input).prop("required")) {
            if($(input).attr("name") === "SkillsCheckBox") {
                validateCheckboxARr(input,5);
            } else {
                validateCheckbox(input);
            }  
        }

    }
    function isValid(element, validClass = "is-valid", invalidClass= "is-invalid") {
        $(element).addClass(validClass);
        $(element).removeClass(invalidClass);
    }

    function isInvalid(element, validClass = "is-valid", invalidClass= "is-invalid") {
        $(element).addClass(invalidClass);
        $(element).removeClass(validClass);
    }
    function validateInputValue(input, error, min = 1, max =  4096) {
        let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = error;     
        
        if(!$(input).val()) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);
        } else if($(input).val().length < min) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);
        } else {
            isValid(input);
        }
    }
    function validateDate(input){
        let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = "Datum är ogiltig. Ange en giltig Datum";     
        let d = new Date();
        let strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
        let d2 = new Date($(input).val());
        let strDatqe = d2.getFullYear() + "/" + (d2.getMonth()+1) + "/" + d2.getDate();
        if(!strDatqe) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);
        } else if(strDatqe >= strDate){
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);
        } else {
            isValid(input);
        }
    }

    function validateEmail(input) {
        let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = "E-postadressen är ogiltig. Ange en giltig e-postadress";
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;

        if(!$(input).val()) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);
        } else if(!regex.test($(input).val())) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);
        } else {
            isValid(input);
        }
    }
    function validateTelephone(input) {
        let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = "Telefon är ogiltig. Ange en giltig Telefon";
        let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

        if(!$(input).val()) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);
        } else if(!regex.test($(input).val())) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);
        } else {
            isValid(input);
        }
    }
    function validatePostNmer(input) {
        let invalidFeedbackId = "#" + $(input).attr("id") + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = "PostNummer är ogiltig. Ange en giltig PostNummer";
        let regex = /\(?([0-9]{3})\)?([ ]?)([0-9]{2})/;
        if(!$(input).val()) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);
        } else if(!regex.test($(input).val())) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);
        } else {
            isValid(input);
        }
    }
    function validatePassword(input, compareWith) {
        let invalidFeedbackId = input + "-invalid-feedback";
        let invalidFeedbackDefault = $(invalidFeedbackId).html();
        let invalidFeedback = "Lösenorden matchar inte varandra!";
        let result = ($(input).val() === $(compareWith).val()) ? true : false;

        if(!$(input).val()) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedbackDefault);

        } else if(!result) {
            isInvalid(input);
            $(invalidFeedbackId).html(invalidFeedback);

        } else {
            isValid(input);
        }
    }
    function findComparePassword() {
        let arr = [];
        $("form input").each(function(i, input) {
            if($(input).attr("type") === "password" && $(input).prop("required")) {
                if($(this).data("comparewith") !== undefined) {
                    arr.push("#" + $(input).attr("id"));
                    arr.push($(input).data("comparewith"));
                }
            }
        });
        return arr;
    }
    function validateRadio(radio) {
        let elements = $("[name='"+ $(radio).attr("name") +"']");
        if(!$(radio).prop("checked")) {
            $(elements).each(function(i, radio) {
                $(radio).addClass("is-invalid"); 
                $(radio).removeClass("is-valid"); 
              });
        } else {
            $('.RadioLabel').addClass("is-invalid");     
            $(radio).removeClass("is-invalid"); 
            $(radio).addClass("is-valid");           
        }
    }
    function validateCheckbox(checkbox) {
        if($(checkbox).prop("checked")) {
            $(checkbox).removeClass("is-invalid");
        } else {
            $(checkbox).addClass("is-invalid");
        }
    }
    //SkillsCheckBox
    function validateCheckboxARr(checkboxes,minNum){
        let elements = $("[name='"+ $(checkboxes).attr("name") +"']").attr("checked"); 
        console.log(elements);
        
    }
    window.addEventListener("load", function() {
        var forms = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if(form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
});