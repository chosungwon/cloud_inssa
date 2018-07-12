$('#register_btn').click(function () {
    var ide = $('#ide').val();
    var pass = $('#pass').val();
    var name1 = $('#name1').val();
    var name2 = $('#name2').val();
    var year = $('#year').val();
    var month = $('#month').val();
    var day = $('#day').val();
    var email = $('#email').val();
    var email2 = $('#email2').val();
    var number1 = $('#number1').val();
    $.ajax({
        url: '주소',
        type: 'POST',
        data: {
            id : ide,
            pass : pass,
            name1 : name1,
            name2 : name2,
            year : year,
            month : month,
            day : day,
            email : email,
            email2 : email2,
            number1 : number1
        },
        dataType: 'json'
    })
        .done(function(response) {
            alert("회원가입에 성공하셨습니다.");
        })
        .fail(function(error) {
            alert("회원가입에 실패하셨습니다.");
        })
        // .always(function(response) {
        //     // 완료 시 동작
        // });
})

$(document).ready(function () {
    $('#day').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#number1').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#year').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    $('#ide').keyup(function (event) {
        if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
            var inputVal = $(this).val();
            $(this).val(inputVal.replace(/[^a-z0-9]/gi, ''));
        }
    });
    $('#email').keyup(function (event) {
        if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
            var inputVal = $(this).val();
            $(this).val(inputVal.replace(/[^a-z0-9]/gi, ''));
        }
    });
});
$(document).ready(function () {
    $("#day").bind("keyup", function () {
        re = /[~!@\#$%^&*\()\-=+_']/gi;
        var temp = $("#day").val();
        if (re.test(temp)) {
            alert("날짜에는 특수문자가 들어갈수 없습니다")
            $("#day").val(temp.replace(re, ""));
        }
    });
});
$(document).ready(function () {
    $("#year").bind("keyup", function () {
        re = /[~!@\#$%^&*\()\-=+_']/gi;
        var temp = $("#year").val();
        if (re.test(temp)) {
            alert("년도에는 특수문자가 들어갈수 없습니다")
            $("#year").val(temp.replace(re, ""));
        }
    });
});
$(document).ready(function () {
    $('#year').keyup(function () {
        if ($(this).val().length > 4) {
            alert('년도는 4자 이내로 작성해주시기 바랍니다.');
            $(this).val($(this).val().substr(0, 4));
        }
    });
});
$(document).ready(function () {
    var a;
    a = $('#day').val();
    $('#send').click(function (e) {
        if ($('#ide').val() == "" ||
            $('#pass').val() == "" ||
            $('#pass2').val() == "" ||
            $('#name1').val() == "" ||
            $('#name2').val() == "" ||
            $('#year').val() == "" ||
            $('#month').val() == "" ||
            $('#day').val() == "" ||
            $('#email').val() == "" ||
            $('#email2').val() == "" ||
            $('#number1').val() == "") {
            alert('필수 항목을 기입해주세요!');
            e.preventDefault();
            if (a > 31 && a < 1) {
                alert("날짜를 제대로 입력해주세요");
            }
        }
    });

    $(document).ready(function () {
        $('#ide').keyup(function () {
            if ($(this).val().length > 12) {
                alert('아이디는 12자 이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 12));
            }
        });
    });
    $(document).ready(function () {
        $("#email").bind("keyup", function () {
            re = /[~!@\#$%^&*\()\-=+_']/gi;
            var temp = $("#email").val();
            if (re.test(temp)) {
                alert("아이디에는 특수문자가 들어갈수 없습니다")
                $("#email").val(temp.replace(re, ""));
            }
        });
    })


    $(document).ready(function () {
        $('#email').keyup(function () {
            if ($(this).val().length > 12) {
                alert('이메일은 20자를 넘지않습니다');
                $(this).val($(this).val().substr(0, 20));
            }
        });
    });



  
    $(document).ready(function () {
        $('#pass').keyup(function () {
            if ($(this).val().length > 16) {
                alert('비밀번호는 16자 이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 16));
            }
        });
    });

    $(document).ready(function () {
        $('#pass2').keyup(function () {
            if ($(this).val().length > 16) {
                alert('비밀번호확인은 16자 이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 16));
            }
        });
    });

    $(document).ready(function () {
        $('#number1').keyup(function () {
            if ($(this).val().length > 11) {
                alert('전화번호는 숫자만 11자이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 11));
            }
        });
    });
    $(document).ready(function () {
        $("#number1").bind("keyup", function () {
            re = /[~!@\#$%^&*\()\-=+_']/gi;
            var temp = $("#number1").val();
            if (re.test(temp)) {
                alert("전화번호에는 특수문자를 사용하실 수 없습니다.")
                $("#number1").val(temp.replace(re, ""));
            }
        });
    })

    $(document).ready(function () {
        $('#name1').keyup(function () {
            if ($(this).val().length > 2) {
                alert('성은 실명제로 2자이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 2));
            }
        });
    });

    $(document).ready(function () {
        $('#name2').keyup(function () {
            if ($(this).val().length > 3) {
                alert('이름은 실명제로 2~3자이내로 작성해주시기 바랍니다.');
                $(this).val($(this).val().substr(0, 3));
            }
        });
    });

    $(document).ready(function () {
        $("#name1").bind("keyup", function () {
            re = /[~!@\#$%^&*\()\-=+_']/gi;
            var temp = $("#name1").val();
            if (re.test(temp)) {
                alert("성에는 특수문자가 들어갈 수 없습니다")
                $("#name1").val(temp.replace(re, ""));
            }
        });
    })
    $(document).ready(function () {
        $("#name2").bind("keyup", function () {
            re = /[~!@\#$%^&*\()\-=+_']/gi;
            var temp = $("#name2").val();
            if (re.test(temp)) {
                alert("이름에는 특수문자가 들어갈 수 없습니다")
                $("#name2").val(temp.replace(re, ""));
            }
        });
    })

});
